import { Component, Input } from '@angular/core';
import { IQuizItem } from 'src/app/models/quizzes';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
})
export class QuizCardComponent {
  @Input() quizItem: IQuizItem;
  @Output() newCardEvent = new EventEmitter<IQuizItem>();

  handlePlayClick(value: IQuizItem) {
    this.newCardEvent.emit(value);
  }
}
