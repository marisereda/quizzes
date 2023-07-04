import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Input() color: 'green' | 'yellow' | 'red' | 'white' = 'yellow';
  @Input() shaded: boolean = false;
  @Input() disabled: boolean = false;

  @Output() newButtonClick = new EventEmitter<void>();
  constructor() {}
  ngOnInit() {}

  handleClick() {
    this.newButtonClick.emit();
  }
}
