import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IQuizResult } from '../models/quizzes';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private router: Router) {}

  redirect(url: string, state?: IQuizResult) {
    if (state) {
      this.router.navigateByUrl(url, { state });
    } else {
      this.router.navigateByUrl(url);
    }
  }
}
