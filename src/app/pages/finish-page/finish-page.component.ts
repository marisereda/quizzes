import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQuizResult } from 'src/app/models/quizzes';
import { FormatTimePipe } from 'src/app/pipes/format-time.pipe';
import { RedirectService } from 'src/app/services/redirect.service';

@Component({
  selector: 'app-finish-page',
  templateUrl: './finish-page.component.html',
})
export class FinishPageComponent implements OnInit {
  titlesList: string[];
  valuesList: string[];

  constructor(
    public router: Router,
    private redirectService: RedirectService,
    private formatTime: FormatTimePipe
  ) {}

  ngOnInit(): void {
    const data: IQuizResult = history.state;
    if (!history.state.quizName) {
      this.redirectService.redirect('');
    }

    const resultsList = {
      'Category:': data.quizName,
      'Difficulty:': data.difficulty ?? '',
      'Score:': `${(data.corrAnswAmount / data.questionsAmount) * 100}%`,
      'Questions:': data.questionsAmount.toString(),
      'Correct answers:': data.corrAnswAmount.toString(),
      'Incorrect answers:': (
        data.questionsAmount - data.corrAnswAmount
      ).toString(),
      'Total time:': this.formatTime.transform(data.totalTime),
    };
    this.titlesList = Object.keys(resultsList);
    this.valuesList = Object.values(resultsList);
  }
}
