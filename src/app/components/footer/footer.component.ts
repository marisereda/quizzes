import { Component } from '@angular/core';
import {
  faGithub,
  faTelegram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  links = [
    {
      icon: faGithub,
      label: 'github',
      href: 'https://github.com/marisereda/quizzes',
    },
    {
      icon: faTelegram,
      label: 'telegram',
      href: 'https://t.me/MarynaSereda',
    },
    {
      icon: faLinkedin,
      label: 'linkedin',
      href: 'https://www.linkedin.com/in/maryna-sereda',
    },
  ];
}
