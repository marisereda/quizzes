import { Component, Input, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';

import { shuffle } from 'lodash';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;

  buttonNames: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.createButtonList();
  }

  //----------------------------------------------------------------
  createButtonList() {
    this.buttonNames = this.task.incorrect_answers;
    this.buttonNames.push(this.task.correct_answer);
    this.buttonNames = shuffle(this.buttonNames);

  }
}
