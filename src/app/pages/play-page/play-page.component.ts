import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IQuizResult, ITask } from 'src/app/models/quizzes';
import { ErrorService } from 'src/app/services/error.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { RedirectService } from 'src/app/services/redirect.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
})
export class PlayPageComponent implements OnInit, OnDestroy {
  tasks: ITask[] = [];
  currentTaskIndex = 0;
  timeStart: number = Date.now();
  quizResult: IQuizResult;
  loading = true;
  quizzesSubscription: Subscription;

  constructor(
    private quizzesService: QuizzesService,
    private route: ActivatedRoute,
    private redirectService: RedirectService,
    private statisticsService: StatisticsService,
    public errorService: ErrorService
  ) {}

  // ----------------------------------------------------------------
  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    const difficulty = this.route.snapshot.paramMap.get('difficulty');

    if (!quizId || !difficulty) {
      return this.redirectService.redirect('404');
    }

    this.quizResult = {
      quizId,
      quizName: '',
      difficulty,
      questionsAmount: 0,
      corrAnswAmount: 0,
      totalTime: 0,
    };

    this.quizzesSubscription = this.quizzesService
      .getTasks(quizId, difficulty)
      .subscribe((tasks) => {
        if (tasks.length === 0) {
          return this.redirectService.redirect('404');
        }
        this.loading = false;
        this.tasks = tasks;
        this.quizResult.quizName = tasks[0].category;
        this.quizResult.questionsAmount = tasks.length;
      });
  }

  // ----------------------------------------------------------------
  ngOnDestroy(): void {
    this.quizzesSubscription.unsubscribe();
  }

  // ----------------------------------------------------------------
  handleClickAnswer(isCorrect: boolean): void {
    if (isCorrect) {
      this.quizResult.corrAnswAmount += 1;
    }
    if (this.currentTaskIndex < this.tasks.length - 1) {
      this.currentTaskIndex += 1;
      return;
    }

    this.quizResult.totalTime = Date.now() - this.timeStart;
    this.statisticsService.saveResult(this.quizResult);
    this.redirectService.redirect(`quiz-results`, this.quizResult);
  }
}
