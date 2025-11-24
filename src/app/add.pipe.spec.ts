import { MyAddPipe } from './add.pipe';

describe('MyAddPipe', () => {
  it('應該+1', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(1)).toBe(2);
  });
});
