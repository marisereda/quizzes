import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const seconds = Math.floor((value / 1000) % 60);
    const minutes = Math.floor((value / 1000 / 60) % 60);
    const hours = Math.floor((value / 1000 / 3600) % 24);

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}
