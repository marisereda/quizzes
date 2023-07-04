import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { Observable, catchError, throwError } from 'rxjs';
import { IQuizzesList } from '../models/quizzes';

@Injectable({
  providedIn: 'root',
})
export class QuizzesService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  // ----------------------------------------------------------------
  getQuizzes(): Observable<IQuizzesList> {
    return this.http
      .get<IQuizzesList>('https://opentdb.com/api_category.php')
      .pipe(catchError(this.ErrorHandler.bind(this)));
  }

  // ----------------------------------------------------------------
  private ErrorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message || error);
  }
}
