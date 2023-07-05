import { Component } from '@angular/core';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  icon = faBoxesStacked;
}
