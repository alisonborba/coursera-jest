// const getPeople = require("./functions");
const getPeople = require("./scripts");
const fetch = require("node-fetch");

test("calls api", () => {
  getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.count).not.toEqual(81);
  });
});

test("calls api 2", async () => {
  const resp = await getPeople(fetch);
  expect(resp.count).toEqual(82);
});

test("testing captured calls", () => {
  const mock = jest.fn();

  let result = mock("foo");

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("test getPeople with depency injection", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 87,
          results: [1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(5);

  return getPeople(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toEqual(1);
    expect(mockFetch).toBeCalled();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith("https://swapi.dev/api/people");
    expect(data.count).toEqual(87);
  });
});
