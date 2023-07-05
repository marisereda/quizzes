import { DecimalPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatTimeService {
  constructor(private decPipe: DecimalPipe) {}

  formatTime(time: number) {
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / 1000 / 60) % 60);
    let hours = Math.floor((time / 1000 / 3600) % 24);

    return `${this.decPipe.transform(hours, '2.0')}:${this.decPipe.transform(
      minutes,
      '2.0'
    )}:${this.decPipe.transform(seconds, '2.0')}`;
  }
}
