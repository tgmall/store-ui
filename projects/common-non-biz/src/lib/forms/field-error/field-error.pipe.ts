import { Pipe, PipeTransform } from '@angular/core';
import { template } from 'lodash';
import { FieldErrorMapper } from './field-error-mapper.service';

@Pipe({
  name: 'fieldError',
})
export class FieldErrorPipe implements PipeTransform {
  constructor(private mapper: FieldErrorMapper) {
  }

  transform(error: { name: string, value: any }, customMessages: Record<string, string> = {}): string {
    const messageTemplate = this.mapper.lookup(error.name, customMessages) ?? error.name;
    return template(messageTemplate)(error.value);
  }
}
