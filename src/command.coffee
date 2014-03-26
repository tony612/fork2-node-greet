module.exports = ->
  parseArgs = require('minimist')
  argv = parseArgs(process.argv.slice(2));

  greet = require('./index');
  console.log(greet(argv['_'], argv['drunk']));
