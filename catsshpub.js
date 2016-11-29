#!/usr/bin/env node

var exec = require('./base/exec');
var format = require('util').format;

var homePath = process.env['HOME'];
var cmd = format('cat %s/.ssh/id_rsa.pub', homePath);
exec(cmd);