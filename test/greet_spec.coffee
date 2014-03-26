describe 'greet', ->
  greet = require('greet')

  it "should greet a person by name", ->
    expect(greet('tony')).to.eql 'hello, tony'

  it "should greet a person flirtatiously if drunk", ->
    expect(greet('tony', true)).to.eql 'hello tony, you look sexy today'
