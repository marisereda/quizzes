import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { Constants } from 'src/app/constants/constants';
import { IStatistics } from 'src/app/models/quizzes';
import { FormatTimePipe } from 'src/app/pipes/format-time.pipe';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics-page',
  templateUrl: './statistics-page.component.html',
})
export class StatisticsPageComponent implements OnInit {
  statistics: IStatistics;
  totalTime = 0;
  showData: { name: string; value: string | number }[];
  chartData: PieChartComponent['data'];

  constructor(
    private statiscsService: StatisticsService,
    private formatTime: FormatTimePipe
  ) {}

  ngOnInit(): void {
    this.statistics = this.statiscsService.getStatistics();

    this.showData = [
      { name: 'Quizzes:', value: this.statistics.totalQuizzes },
      {
        name: 'Average time:',
        value: this.formatTime.transform(this.statistics.avgTime),
      },
      { name: 'Questions:', value: this.statistics.totalQuestions },
    ];

    this.chartData = [
      {
        label: 'Correct Answers',
        value: this.statistics.correctAnswers,
        color: Constants.chartCorrColor,
      },
      {
        label: 'Incorrect Answers',
        value: this.statistics.incorrectAnswers,
        color: Constants.chartIncorrColor,
      },
    ];
  }
}
