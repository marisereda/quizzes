import { ITask } from './task';

export interface IQuiz {
  response_code: number;
  results: ITask[];
}
