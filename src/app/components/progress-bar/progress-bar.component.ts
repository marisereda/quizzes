import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
})
export class ProgressBarComponent {
  @Input() quizName: string;
  @Input() difficulty: string | null;
  @Input() currentTaskIndex: number;
  @Input() tasksAmount: number;
}
