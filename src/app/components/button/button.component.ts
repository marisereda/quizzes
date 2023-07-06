import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() name: string;
  @Input() color: 'green' | 'yellow' | 'red' | 'white' = 'yellow';
  @Input() shaded = false;
  @Input() disabled = false;

  @Output() newButtonClick = new EventEmitter<void>();

  handleClick() {
    this.newButtonClick.emit();
  }
}
