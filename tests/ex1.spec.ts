import { main } from '@/ex1';

describe('main', () => {
  it('should return "Hello World"', async () => {
    const result = await main();
    expect(result).toBe('Hello World');
  });
});
