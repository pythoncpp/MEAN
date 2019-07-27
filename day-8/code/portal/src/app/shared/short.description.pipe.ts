import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescription'
})

export class ShortDescriptionPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    if (value.length > 350) {
      return value.substr(0, 350) + '...'
    }

    return value
  }
}
