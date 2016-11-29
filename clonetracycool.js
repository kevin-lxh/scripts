#!/usr/bin/env node

var program = require('commander');
var exec = require('./base/exec');
var format = require('util').format;

program.version('1.0.0')
.arguments('<repository_name> [worktree_name]')
.action(function (repositoryName, workTreeName) {
    var cmd = format('git clone git@github.com:tracycool/%s %s', repositoryName, workTreeName || '');
    exec(cmd);
}).parse(process.argv);
