describe('greet', function(){
  var greet = require('greet')

  it("should greet a person by name", function(){
    expect(greet('tony')).to.eql('hello, tony');
  });

  it("should greet a person flirtatiously if drunk", function(){
    expect(greet('tony', true)).to.eql('hello tony, you look sexy today');
  });
});
