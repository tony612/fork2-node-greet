#!/usr/bin/env node

var parseArgs = require('minimist')
var argv = parseArgs(process.argv.slice(2));

greet = require('../lib/index');
console.log(greet(argv['_'], argv['drunk']));
