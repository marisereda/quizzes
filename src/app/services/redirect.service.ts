import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RedirectService {
  constructor(private router: Router) {}
  redirect(url: string, state: {} | null = null) {
    if (!state) {
      this.router.navigateByUrl(url);
    } else {
      this.router.navigateByUrl(url, { state });
    }
  }
}
