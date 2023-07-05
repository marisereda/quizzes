import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  links = Object.entries({
    Home: '',
    Statistics: 'statistics',
  });

  ngOnInit(): void {
    console.log('🚧 links:', this.links);
  }
}
