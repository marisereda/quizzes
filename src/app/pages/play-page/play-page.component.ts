import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuizResult } from 'src/app/models/quiz-result';
import { ITask } from 'src/app/models/task';
import { ErrorService } from 'src/app/services/error.service';
import { RedirectService } from 'src/app/services/redirect.service';
import { StatisticsService } from 'src/app/services/statistics.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
})
export class PlayPageComponent implements OnInit {
  quizId: string | null;
  quizName: string;
  difficulty: string | null;
  tasks: ITask[] = [];
  currentTaskIndex = 0;
  corrAnswAmount = 0;
  timeStart: number = Date.now();
  statistics: IQuizResult;
  loading = false;
  notFound = false;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    private redirectService: RedirectService,
    private statisticsService: StatisticsService,
    public errorService: ErrorService
  ) {}
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.difficulty = this.route.snapshot.paramMap.get('difficulty');
    this.loading = true;
    if (!this.quizId || !this.difficulty) {
      this.notFound = true;
      this.loading = false;
      return;
    }
    this.tasksService
      .getTasks(this.quizId, this.difficulty)
      .subscribe((quiz) => {
        this.loading = false;
        this.tasks = quiz.results;
        this.quizName = this.tasks[0].category;
        console.log('🚧 this.tasks:', this.tasks[this.currentTaskIndex]);
      });
  }

  handleClickAnswer(isCorrect: boolean): void {
    if (isCorrect) {
      this.corrAnswAmount += 1;
    }
    if (this.currentTaskIndex < this.tasks.length - 1) {
      this.currentTaskIndex += 1;
    } else {
      this.statistics = {
        quizId: this.quizId,
        quizName: this.quizName,
        difficulty: this.difficulty,
        questionsAmount: this.currentTaskIndex + 1,
        corrAnswAmount: this.corrAnswAmount,
        totalTime: Date.now() - this.timeStart,
      };

      this.statisticsService.setStatistics(this.statistics);
      this.redirectService.redirect(`quiz-results`, this.statistics);
    }
    console.log('🚧 corrAnswAmount:', this.corrAnswAmount);
  }
}
