#!/usr/bin/env node

var program = require('commander');
var clone = require('./base/gitclone');

program.version('1.0.0')
.arguments('<repository_name> [worktree_name]')
.action(function (repositoryName, workTreeName) {
    clone('git@github.com:tracycool/' + repositoryName, workTreeName);
}).parse(process.argv);

