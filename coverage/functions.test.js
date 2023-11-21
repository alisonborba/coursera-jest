// const functions = require("./functions");
const functions = require("./functions");

// it()
test("is defined", () => {
  expect(functions.getAge("alison", 35)).toBeDefined();
});

test("2 + 2 = 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).not.toEqual({ one: 2, two: 2 });
});

test("test is null", () => {
  expect(functions.isNull()).toBeNull();
});

test("test isUndefined", () => {
  expect(functions.isUndefined()).toBeUndefined();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeTruthy();
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).toBeFalsy();
});

test("2 + 2", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4);
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
  //   expect(value).toBe(0.30000000000000004);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("the shopping list has beer on it", () => {
  const shoppingList = ["nappies", "toilet roll", "beer"];
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

test("compiling android goes as expetected", () => {
  expect(functions.compileAndroidCode).toThrow();
  expect(functions.compileAndroidCode).toThrow(/JDK/);
});
