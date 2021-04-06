var assert = require("assert");
// var add = require("../add.js");
import {add} from "../add";
// 
describe("add函数测试", function () {
  it("1+2等于3", function () {
    assert.equal(add(1, 2), 3);
  });
  it("-5+2等于-3", function () {
    assert.equal(add(-5, 2), -3);
  });
});
