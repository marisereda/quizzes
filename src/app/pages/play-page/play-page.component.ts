import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITask } from 'src/app/models/task';
import { ErrorService } from 'src/app/services/error.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-play-page',
  templateUrl: './play-page.component.html',
})
export class PlayPageComponent implements OnInit {
  quizId: string | null;
  difficulty: string | null;
  tasks: ITask[] = [];
  loading = false;
  notFound = false;
  constructor(
    private tasksService: TasksService,
    private route: ActivatedRoute,
    public errorService: ErrorService
  ) {}
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('quizId');
    this.difficulty = this.route.snapshot.paramMap.get('difficulty');
    this.loading = true;
    if (!this.quizId || !this.difficulty) {
      this.notFound = true;
      this.loading = false;
      return;
    }
    this.tasksService
      .getTasks(this.quizId, this.difficulty)
      .subscribe((quiz) => {
        this.loading = false;
        this.tasks = quiz.results;
      });
  }
}
