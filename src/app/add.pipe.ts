import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'myAdd' })
export class MyAddPipe implements PipeTransform {
  transform(value: number): number {
    return value + 1;
  }
}
