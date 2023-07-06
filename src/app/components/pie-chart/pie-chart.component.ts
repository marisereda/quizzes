import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
})
export class PieChartComponent implements OnInit {
  public chart: Chart<'pie'>;
  @Input() data: { label: string; value: number; color: string }[];

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    const { labels, data, backgroundColor } = this.data.reduce(
      (acc, item) => {
        acc.labels.push(item.label);
        acc.data.push(item.value);
        acc.backgroundColor.push(item.color);
        return acc;
      },
      { labels: [], data: [], backgroundColor: [] } as {
        labels: string[];
        data: number[];
        backgroundColor: string[];
      }
    );

    this.chart = new Chart('MyChart', {
      type: 'pie',

      data: {
        labels,
        datasets: [
          {
            label: '',
            data,
            backgroundColor,
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
