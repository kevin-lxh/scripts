#!/usr/bin/env node

var fs = require('fs')
var path = require('path')
var format = require('util').format

var program = require('commander');
var co = require('co')

program.version('1.0.0')
.option('-t --test', 'test')
.arguments('<project_path>')
.action(read)
.parse(process.argv);

function read(dir) {
	var filenames = fs.readdirSync(dir)
	for (let name of filenames) {
		var fullPath = path.join(dir, name)

		if (fs.lstatSync(fullPath).isDirectory()) {
			read(fullPath)
		}
		else if (fullPath.match(/\.(h|m|swift)$/)) {
			var isSwiftFile = fullPath.match(/\.swift$/) != null
			var regex

			if (isSwiftFile) {
				regex = /__\("(.*?)"\)/g
			}
			else {
				regex = /_\(@"(.*?)"\)/g
			}

			var text = fs.readFileSync(fullPath, 'utf8')
				var results = text.match(regex)
				if (results) {
					console.log('// ' + name)
					results.forEach(function(item) {
						var t = item.slice(4, -2)
						if (program.test) {
							var log = format('"%s" = "%s";', t, Math.round(Math.random() * 1000))
							console.log(log)
						}
						else {
							console.log(t)							
						}
					})
					console.log('')
				}
		}
	}
}