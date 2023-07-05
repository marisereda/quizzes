export interface IQuizResult {
  quizId: string | null;
  quizName: string;
  difficulty: string | null;
  questionsAmount: number;
  corrAnswAmount: number;
  totalTime: number;
}
