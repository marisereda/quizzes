import { Component, OnInit } from '@angular/core';
import { IQuizItem } from 'src/app/models/quizzes';
import { ErrorService } from 'src/app/services/error.service';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { RedirectService } from 'src/app/services/redirect.service';
import { shuffle } from 'lodash';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  quizzes: IQuizItem[] = [];
  difficulty: string = 'easy';
  randomIndex = Math.floor(Math.random() * 10);
  loading = false;
  constructor(
    private quizzesService: QuizzesService,
    private redirectService: RedirectService,

    public errorService: ErrorService
  ) {}

  ngOnInit(): void {
    console.log('🚧 randomIndex:', this.randomIndex);

    this.loading = true;
    this.quizzesService.getQuizzes().subscribe((quizList) => {
      this.loading = false;
      this.quizzes = quizList.trivia_categories;
      this.quizzes = shuffle(this.quizzes);
      this.quizzes = this.quizzes.slice(0, 10);
    });
  }
  handlePlayClick(quizItem: IQuizItem) {
    this.redirectService.redirect(`quiz/${quizItem.id}/${this.difficulty}`, {
      quizzes: this.quizzes.map((quiz) => quiz.id),
    });
  }

  handleChangeDifficutly(value: string) {
    this.difficulty = value;
  }
}
