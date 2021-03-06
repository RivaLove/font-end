const add = require('./add.js');
const expect = require('chai').expect;

describe('加法函数测试', function () {
  it('1 + 1 应该等于2', function () {
    expect(add(1, 1)).to.be.equal(2);
  });

  it('should 3 - 3 = 0', function () {
    expect(add(3,-3)).to.be.equal(0);
  });
});