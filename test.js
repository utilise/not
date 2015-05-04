var expect = require('chai').expect
  , not = require('./')

describe('not', function() {
  it('should invert result of function', function() {
    var a = [0, 1, 2, 3]
    expect(a.filter(Boolean)).to.eql([1,2,3])
    expect(a.filter(not(Boolean))).to.eql([0])
  })
})