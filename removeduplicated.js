#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var format = require('util').format

var program = require('commander');
var co = require('co')

program.version('1.0.0')
.arguments('<filepath>')
.action(action)
.parse(process.argv);

function action(filepath) {
	var text = fs.readFileSync(filepath, 'utf8')
	var lines = text.split('\n')
	
	var existedLineToTrue = {}

	for (let line of lines) {
		line = line.trim()

		if (line.startsWith('//') || line.length == 0) {
			console.log(line)
		}
		else {
			if (existedLineToTrue[line.toLowerCase()] == null) {
				console.log(line)
				existedLineToTrue[line.toLowerCase()] = true
			} 
		}
	}
}