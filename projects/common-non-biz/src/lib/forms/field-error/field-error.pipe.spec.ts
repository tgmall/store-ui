import { TestBed } from '@angular/core/testing';
import { FieldErrorMapper } from './field-error-mapper.service';
import { FieldErrorPipe } from './field-error.pipe';

describe('FieldErrorPipe', () => {
  it('create an instance', () => {
    const module = TestBed.configureTestingModule({
      providers: [FieldErrorPipe, FieldErrorMapper],
    });
    const pipe = module.inject(FieldErrorPipe);
    expect(pipe).toBeTruthy();
  });
});
