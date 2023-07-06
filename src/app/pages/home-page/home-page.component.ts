import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuizCardComponent } from 'src/app/components/quiz-card/quiz-card.component';
import { IQuizItem } from 'src/app/models/quizzes';
import { ErrorService } from 'src/app/services/error.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { RedirectService } from 'src/app/services/redirect.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnDestroy {
  quizzes: IQuizItem[] = [];
  quizzesSubscription: Subscription;
  difficulty = 'easy';
  randomIndex = Math.floor(Math.random() * 10);
  loading = true;

  constructor(
    private quizzesService: QuizzesService,
    private redirectService: RedirectService,
    public errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.quizzesSubscription = this.quizzesService
      .getQuizzes()
      .subscribe((quizzes) => {
        this.loading = false;
        this.quizzes = quizzes;
      });
  }

  ngOnDestroy(): void {
    this.quizzesSubscription.unsubscribe();
  }

  // ----------------------------------------------------------------
  handlePlayClick(quizItem: IQuizItem) {
    this.redirectService.redirect(`quiz/${quizItem.id}/${this.difficulty}`);
  }

  // ----------------------------------------------------------------
  handleChangeDifficutly(value: string) {
    this.difficulty = value;
  }

  // ----------------------------------------------------------------
  getCardColor(index: number) {
    const colors: QuizCardComponent['color'][] = ['yellow', 'darkBlue', 'blue'];
    return colors[index % colors.length];
  }
}
