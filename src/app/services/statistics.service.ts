import { Injectable } from '@angular/core';
import { IQuizResult } from '../models/quiz-result';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  getStatistics() {
    const savedStatistics = localStorage.getItem('statistics') ?? '';
    let parsedStatistics: IQuizResult[];
    try {
      parsedStatistics = JSON.parse(savedStatistics);
    } catch {
      parsedStatistics = [];
    }
    return parsedStatistics;
  }

  setStatistics(stat: IQuizResult) {
    let statistics = this.getStatistics();
    statistics.push(stat);
    localStorage.setItem('statistics', JSON.stringify(statistics));
  }
}
