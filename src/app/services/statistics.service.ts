import { Injectable } from '@angular/core';
import { IQuizResult } from '../models/quiz-result';
import { z } from 'zod';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  StatSchema = z.array(
    z.object({
      quizId: z.string(),
      quizName: z.string(),
      difficulty: z.string(),
      questionsAmount: z.number(),
      corrAnswAmount: z.number(),
      totalTime: z.number(),
    })
  );
  constructor() {}

  getStatistics() {
    const savedStatistics = localStorage.getItem('statistics') ?? '';
    let parsedStatistics: IQuizResult[];
    try {
      parsedStatistics = JSON.parse(savedStatistics);
      this.StatSchema.parse(parsedStatistics);
    } catch {
      localStorage.removeItem('statistics');
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
