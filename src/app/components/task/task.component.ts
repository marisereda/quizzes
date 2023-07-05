import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  isAnswered: boolean = false;
  selectedAnswer: string = '';

  answers: string[] = [];
  constructor() {}

  ngOnInit(): void {
    this.prevTask = this.task;
    this.createButtonList();
  }

  ngDoCheck() {
    if (this.prevTask !== this.task) {
      this.createButtonList();
      this.prevTask = this.task;
    }
  }

  //----------------------------------------------------------------
  createButtonList() {
    console.log('🚧 correct answer:', this.task.correct_answer);

    this.answers = this.task.incorrect_answers;
    this.answers.push(this.task.correct_answer);
    this.answers = shuffle(this.answers);
  }

  //----------------------------------------------------------------
  handleClickAnswer(answer: string) {
    this.isAnswered = true;
    this.selectedAnswer = answer;

    setTimeout(() => {
      this.newTaskEvent.emit(answer === this.task.correct_answer);
      this.isAnswered = false;
    }, 2000);
  }
}
