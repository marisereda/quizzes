import { Pipe, PipeTransform } from '@angular/core';
import { decode } from 'html-entities';

@Pipe({
  name: 'decode',
})
export class DecodePipe implements PipeTransform {
  transform(value: string): string {
    return decode(value);
  }
}
