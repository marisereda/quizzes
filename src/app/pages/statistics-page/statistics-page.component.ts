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
  totalTime = 0;
  showData = {
    'Quizzes:': 0,
    'Average time:': '',
    'Questions:': 0,
  };
  renderData: [string, string | number][];
  chartData = {
    'Correct Answers': 0,
    'Incorrect Answers': 0,
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
        this.totalTime += result.totalTime;
        this.showData['Quizzes:'] += 1;
        this.showData['Questions:'] += result.questionsAmount;
        this.showData['Average time:'] = this.formatService.formatTime(
          this.totalTime / this.showData['Quizzes:']
        );
        this.chartData['Correct Answers'] += result.corrAnswAmount;
      });
      this.chartData['Incorrect Answers'] =
        this.showData['Questions:'] - this.chartData['Correct Answers'];
    }

    this.renderData = Object.entries(this.showData);
  }
}
