import { greet } from './greet.util';

describe('greet 函式', () => {
  it('應該輸出 Hello, Ailsa!', () => {
    expect(greet('Ailsa')).toBe('Hello, Ailsa!');
  });

  it('應該輸出 Hello, 空字串時也能正常顯示', () => {
    expect(greet('')).toBe('Hello, !');
  });
});
