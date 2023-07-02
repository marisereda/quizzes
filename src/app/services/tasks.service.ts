import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';

import { Observable, catchError, tap, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { IQuiz } from '../models/quiz';
import { tasksAmount } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getTasks(quizId: string, difficulty: string): Observable<IQuiz> {
    return this.http
      .get<IQuiz>('https://opentdb.com/api.php', {
        params: new HttpParams().appendAll({
          amount: tasksAmount,
          difficulty,
          type: 'multiple',
          category: quizId,
        }),
      })
      .pipe(catchError(this.ErrorHandler.bind(this)));
  }
  private ErrorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message || error);
  }
}
