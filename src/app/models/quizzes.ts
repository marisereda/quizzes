export interface IQuizzesList {
  trivia_categories: IQuizItem[];
}

export interface IQuiz {
  response_code: number;
  results: ITask[];
}

export interface ITask {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// ----------------------------------------------------------------

export interface IQuizItem {
  id: number;
  name: string;
}

export interface IQuizResult {
  quizId: string | null;
  quizName: string;
  difficulty: string | null;
  questionsAmount: number;
  corrAnswAmount: number;
  totalTime: number;
}

export interface IStatistics {
  totalQuizzes: number;
  totalQuestions: number;
  avgTime: number;
  correctAnswers: number;
  incorrectAnswers: number;
}
