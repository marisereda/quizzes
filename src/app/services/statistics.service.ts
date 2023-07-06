import { Injectable } from '@angular/core';
import { IQuizResult } from '../models/quizzes';
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

  // ----------------------------------------------------------------
  getStatistics() {
    const statistics = {
      totalQuizzes: 0,
      totalQuestions: 0,
      avgTime: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
    };

    let totalTime = 0;
    this.getResults().forEach((result) => {
      totalTime += result.totalTime;
      statistics.totalQuizzes += 1;
      statistics.totalQuestions += result.questionsAmount;
      statistics.correctAnswers += result.corrAnswAmount;
    });

    statistics.incorrectAnswers =
      statistics.totalQuestions - statistics.correctAnswers;
    statistics.avgTime = totalTime / statistics.totalQuizzes;

    return statistics;
  }

  // ----------------------------------------------------------------
  saveResult(result: IQuizResult) {
    const statistics = this.getResults();
    statistics.push(result);
    localStorage.setItem('statistics', JSON.stringify(statistics));
  }

  // ----------------------------------------------------------------
  getResults(): IQuizResult[] {
    try {
      const savedStatistics = localStorage.getItem('statistics') ?? '';
      const parsedStatistics = JSON.parse(savedStatistics);
      return this.StatSchema.parse(parsedStatistics);
    } catch {
      localStorage.removeItem('statistics');
      return [];
    }
  }
}
