var expect = require("chai").expect
describe('greet', function(){
  var greet = require('greet')

  it("greets to a person", function(){
    expect(greet('tony')).to.eql('hello, tony');
  });

  it("greets in a sexy way", function(){
    expect(greet('tony', true)).to.eql('hello tony, you look sexy today');
  });
});
