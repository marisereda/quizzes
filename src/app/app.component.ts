import { Component, OnInit } from '@angular/core';
import { ITask } from './models/task';
import { TasksService } from './services/tasks.service';
import { ErrorService } from './services/error.service';
import { IQuizResult } from './models/quiz-result';
// import { tasks as data } from './data/tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'quizzes';

  loading = false;

  constructor(
    private tasksService: TasksService,
    public errorService: ErrorService
  ) {}

  ngOnInit(): void {}
}
