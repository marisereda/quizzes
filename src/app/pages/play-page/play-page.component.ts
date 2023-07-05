import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IQuizResult } from 'src/app/models/quiz-result';
import { ITask } from 'src/app/models/task';
import { ErrorService } from 'src/app/services/error.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { RedirectService } from 'src/app/services/redirect.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
})
export class PlayPageComponent implements OnInit, OnDestroy {
  quizzesSubscription: Subscription;
  quizIdList: string[];
  quizId: string | null;
  quizName: string;
  difficulty: string | null;
  tasks: ITask[] = [];
  currentTaskIndex = 0;
  corrAnswAmount = 0;
  timeStart: number = Date.now();
  statistics: IQuizResult;
  loading = true;
  notFound = false;
  constructor(
    private quizzesService: QuizzesService,
    private route: ActivatedRoute,
    private redirectService: RedirectService,
    private statisticsService: StatisticsService,
    public errorService: ErrorService
  ) {}

  // ----------------------------------------------------------------
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.difficulty = this.route.snapshot.paramMap.get('difficulty');

    if (!this.quizId || !this.difficulty) {
      this.redirectService.redirect('404');
      this.loading = false;
      return;
    }

    this.quizzesSubscription = this.quizzesService
      .getTasks(this.quizId, this.difficulty)
      .subscribe((tasks) => {
        this.loading = false;
        this.tasks = tasks;

        if (this.tasks.length === 0) {
          this.redirectService.redirect('404');
          return;
        }
        this.quizName = this.tasks[0].category;
      });
  }

  // ----------------------------------------------------------------
  ngOnDestroy(): void {
    this.quizzesSubscription.unsubscribe();
  }

  // ----------------------------------------------------------------
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
  }
}
