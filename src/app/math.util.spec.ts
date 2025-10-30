import { add } from './math.util';

describe('math.util', () => {
  it('add(1, 2) 應為 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});