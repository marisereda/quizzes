import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-difficulty-bar',
  templateUrl: './difficulty-bar.component.html',
})
export class DifficultyBarComponent {
  @Input() currentDifficulty: string;
  @Output() newBarEvent = new EventEmitter<string>();

  difficulties: string[] = ['easy', 'medium', 'hard'];

  handleChangeDifficulty(value: string) {
    this.newBarEvent.emit(value);
  }
}
