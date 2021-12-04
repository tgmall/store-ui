import { TestBed } from '@angular/core/testing';
import { SafeHtmlPipe } from './safe-html.pipe';

describe('SafeHtmlPipe', () => {
  it('create an instance', () => {
    const module = TestBed.configureTestingModule({
      providers: [SafeHtmlPipe],
    });
    const pipe = module.inject(SafeHtmlPipe);
    expect(pipe).toBeTruthy();
  });

  it('wrap html to SafeHtml', () => {
    const module = TestBed.configureTestingModule({
      providers: [SafeHtmlPipe],
    });
    const pipe = module.inject(SafeHtmlPipe);
    const actual = pipe.transform('<div></div>');
    expect(actual.constructor.name).toEqual('SafeHtmlImpl');
  });
});
