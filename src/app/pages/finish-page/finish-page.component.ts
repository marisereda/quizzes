import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuizResult } from 'src/app/models/quiz-result';
import { FormatTimeService } from 'src/app/services/format-time.service';
import { RedirectService } from 'src/app/services/redirect.service';

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
})
export class FinishPageComponent implements OnInit {
  data: IQuizResult;
  totalTime: { hours: number; minutes: number; seconds: number };
  constructor(
    public router: Router,
    private redirectService: RedirectService,
    private formatService: FormatTimeService
  ) {}

  ngOnInit(): void {
    if (!history.state.hasOwnProperty('quizName')) {
      this.redirectService.redirect('');
    }
    this.data = history.state;
    this.totalTime = this.formatService.formatTime(this.data.totalTime);
    console.log('🚧 this.data:', this.data);
  }
}
