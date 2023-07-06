import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { ITask } from 'src/app/models/quizzes';

import shuffle from 'lodash.shuffle';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnChanges {
  @Input() task: ITask;
  @Output() newTaskEvent = new EventEmitter<boolean>();
  isAnswered = false;
  selectedAnswer = '';
  answers: string[] = [];

  //----------------------------------------------------------------
  ngOnChanges(): void {
    this.createButtonList();
  }

  //----------------------------------------------------------------
  createButtonList() {
    this.answers = shuffle([
      ...this.task.incorrect_answers,
      this.task.correct_answer,
    ]);
  }

  //----------------------------------------------------------------
  handleClickAnswer(answer: string) {
    this.isAnswered = true;
    this.selectedAnswer = answer;

    setTimeout(() => {
      this.newTaskEvent.emit(answer === this.task.correct_answer);
      this.isAnswered = false;
    }, Constants.taskTimeout);
  }
}
