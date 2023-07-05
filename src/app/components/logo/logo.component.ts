import { Component } from '@angular/core';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
// import { faBoxesStacked } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})
export class LogoComponent {
  icon = faBoxesStacked;
  // <i class="fa-solid fa-boxes-stacked"></i>
  // <FontAwesomeIcon icon={faBoxesStacked} />
}
