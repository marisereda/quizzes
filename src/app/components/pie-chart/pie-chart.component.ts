import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnInit {
  public chart: any;
  @Input() data: { [key: string]: number };

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie',

      data: {
        labels: Object.keys(this.data),
        datasets: [
          {
            label: '',
            data: Object.values(this.data),
            backgroundColor: ['green', 'red'],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
