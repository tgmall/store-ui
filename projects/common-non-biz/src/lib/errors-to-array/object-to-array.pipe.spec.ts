import { ErrorsToArrayPipe } from './object-to-array.pipe';

describe('ObjectToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorsToArrayPipe();
    expect(pipe).toBeTruthy();
  });

  it('convert ValidationErrors to array', () => {
    const pipe = new ErrorsToArrayPipe();
    expect(pipe.transform({ minlength: 1 })).toEqual([{ name: 'minlength', value: 1 }]);
  });
});
