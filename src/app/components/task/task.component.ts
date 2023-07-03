import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ITask } from 'src/app/models/task';

import { shuffle } from 'lodash';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Output() newTaskEvent = new EventEmitter<boolean>();
  prevTask: ITask;

  buttonNames: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.prevTask = this.task;
    this.createButtonList();
  }

  // ngOnChange(changes: SimpleChanges) {
  //   console.log('CHANGES:', changes);
  //   this.createButtonList();
  // }

  ngDoCheck() {
    if (this.prevTask !== this.task) {
      this.createButtonList();
      this.prevTask = this.task;
    }
  }

  //----------------------------------------------------------------
  createButtonList() {
    console.log('🚧 correct answer:', this.task.correct_answer);

    this.buttonNames = this.task.incorrect_answers;
    this.buttonNames.push(this.task.correct_answer);
    this.buttonNames = shuffle(this.buttonNames);
  }

  //----------------------------------------------------------------
  handleClickAnswer(name: string) {
    this.newTaskEvent.emit(name === this.task.correct_answer);
  }
}
