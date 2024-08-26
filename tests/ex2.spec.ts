import { main } from "@/ex2";

describe('getVariables', () => {
  it('should return correct string',async () => {
    const result =await main();
    expect(result.str).toBe("Hello, TypeScript");
  });

  it('should return correct number',async () => {
    const result = await main();
    expect(result.num).toBe(42);
  });

  it('should return correct boolean',async () => {
    const result = await main()
    expect(result.bool).toBe(true);
  });

  it('should return correct array',async () => {
    const result = await main();
    expect(result.arr).toEqual([1, 2, 3]);
  });

  it('should return correct object',async () => {
    const result = await main();
    expect(result.obj).toEqual({ name: "Alice", age: 30 });
  });
});