import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  links = [
    {
      label: 'Home',
      href: '',
    },
    {
      label: 'Statistics',
      href: 'statistics',
    },
  ];
}
