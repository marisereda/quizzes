import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable, catchError, map, throwError } from 'rxjs';
import { IQuizItem, IQuizzesList } from '../models/quizzes';
import { shuffle } from 'lodash';
import { IQuiz } from '../models/quiz';
import { Constants } from '../constants/constants';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  // ----------------------------------------------------------------
  getQuizzes(): Observable<IQuizItem[]> {
    return this.http
      .get<IQuizzesList>('https://opentdb.com/api_category.php')
      .pipe(
        map((data) => {
          let quizzes = data.trivia_categories;
          quizzes = shuffle(quizzes);
          quizzes = quizzes.slice(0, 10);
          return quizzes;
        }),
        catchError(this.ErrorHandler.bind(this))
      );
  }

  // ----------------------------------------------------------------
  getTasks(quizId: string, difficulty: string): Observable<ITask[]> {
    return this.http
      .get<IQuiz>('https://opentdb.com/api.php', {
        params: new HttpParams().appendAll({
          amount: Constants.tasksAmount,
          difficulty,
          type: 'multiple',
          category: quizId,
        }),
      })
      .pipe(
        map((data) => data.results),
        catchError(this.ErrorHandler.bind(this))
      );
  }

  // ----------------------------------------------------------------
  private ErrorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message || error);
  }
}
