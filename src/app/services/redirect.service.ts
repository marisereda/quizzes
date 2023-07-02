import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private router: Router) {}
  redirect(url: string) {
    this.router.navigateByUrl(url);
  }
}
