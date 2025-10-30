import { MyUpperPipe } from './uppercase.pipe';

describe('MyUpperPipe', () => {
  it('應該轉成大寫', () => {
    const pipe = new MyUpperPipe();
    expect(pipe.transform('abc')).toBe('ABC');
  });
});
