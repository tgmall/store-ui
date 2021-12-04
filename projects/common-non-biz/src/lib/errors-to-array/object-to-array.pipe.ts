import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'errorsToArray',
})
export class ErrorsToArrayPipe implements PipeTransform {
  transform(obj: ValidationErrors | null | undefined): { name: string, value: any }[] {
    return Object.entries(obj ?? {}).map(([name, value]) => ({ name, value }));
  }
}
