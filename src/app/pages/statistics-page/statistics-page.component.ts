import { Component, OnInit } from '@angular/core';
import { IQuizResult } from 'src/app/models/quiz-result';
import { FormatTimeService } from 'src/app/services/format-time.service';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
})
export class StatisticsPageComponent implements OnInit {
  statistics: IQuizResult[];
  calculatedResult = {
    totalQuizzes: 0,
    totalTime: 0,
    averageTime: { hours: 0, minutes: 0, seconds: 0 },
    totalQuestions: 0,
    totalCorrAnswers: 0,
    totalIncorrAnswers: 0,
  };

  constructor(
    private statiscsService: StatisticsService,
    private formatService: FormatTimeService
  ) {}

  ngOnInit(): void {
    this.statistics = this.statiscsService.getStatistics();
    console.log('🚧 this.statistics:', this.statistics);

    if (this.statistics.length > 0) {
      this.statistics.forEach((result) => {
        this.calculatedResult.totalQuizzes += 1;
        this.calculatedResult.totalTime += result.totalTime;
        this.calculatedResult.totalQuestions += result.questionsAmount;
        this.calculatedResult.totalCorrAnswers += result.corrAnswAmount;
      });
      this.calculatedResult.averageTime = this.formatService.formatTime(
        this.calculatedResult.totalTime / this.calculatedResult.totalQuizzes
      );
      this.calculatedResult.totalIncorrAnswers =
        this.calculatedResult.totalQuestions -
        this.calculatedResult.totalCorrAnswers;
    }
  }
}
