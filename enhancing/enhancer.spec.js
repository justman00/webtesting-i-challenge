const enhancer = require("./enhancer.js");
// test away!

describe("enhancer object", () => {
  const item = {
    name: "test",
    durability: 85,
    enhancement: 15
  };

  it("should succeed", () => {
    expect(enhancer.succeed(item)).toEqual({ ...item, enhancement: 16 });
  });

  const item2 = {
    name: "test",
    durability: 85,
    enhancement: 13
  };

  it("should fail with enh less than 15", () => {
    expect(enhancer.fail(item2)).toEqual({ ...item2, durability: 80 });
  });

  const item3 = {
    name: "test",
    durability: 85,
    enhancement: 16
  };

  it("should fail with enh more than 15", () => {
    expect(enhancer.fail(item3)).toEqual({ ...item3, durability: 75 });
  });

  const item4 = {
    name: "test",
    durability: 85,
    enhancement: 17
  };

  it("should fail with enh more than 16", () => {
    expect(enhancer.fail(item4)).toEqual({
      ...item4,
      durability: 75,
      enhancement: 16
    });
  });

  const item5 = {
    name: "test",
    durability: 85,
    enhancement: 17
  };

  it("should add a new name", () => {
    expect(enhancer.get(item5)).toEqual({
      ...item5,
      name: "[+17] test"
    });
  });

  const item6 = {
    name: "test",
    durability: 85,
    enhancement: 0
  };

  it("should not change the name", () => {
    expect(enhancer.get(item6)).toEqual({
      ...item6,
      name: "test"
    });
  });

  const item7 = {
    name: "test",
    durability: 85,
    enhancement: 17
  };

  it("should add a new name", () => {
    expect(enhancer.repair(item7)).toEqual({
      ...item7,
      durability: 100
    });
  });
});
