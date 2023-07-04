import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatTimeService {
  constructor() {}

  formatTime(time: number) {
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor((time / 1000 / 3600) % 24);

    return { hours, minutes, seconds };
  }
}
