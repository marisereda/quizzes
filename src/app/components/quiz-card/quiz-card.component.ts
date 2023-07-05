import { Component, Input } from '@angular/core';
import { IQuizItem } from 'src/app/models/quizzes';
import { Output, EventEmitter } from '@angular/core';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
})
export class QuizCardComponent {
  @Input() quizItem: IQuizItem;
  @Input() color: 'darkBlue' | 'blue' | 'yellow';
  @Output() newCardEvent = new EventEmitter<IQuizItem>();
  tasksAmount = Constants.tasksAmount;

  handlePlayClick(value: IQuizItem) {
    this.newCardEvent.emit(value);
  }
}
