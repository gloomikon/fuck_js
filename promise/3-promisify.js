'use strict';

const promosify = fn => (...args) => new Promise((resolve, reject) => {
	args.push((err, result) => {
		if (err) reject(err);
		else resolve(result);
	});
	fn(...args);
});

const fs = require('fs');

const readFile1 = promosify(fs.readFile);

readFile1('file1.txt', 'utf8')
	.then(data => {
		console.log(data.toString());
		return readFile1('file2.txt', 'utf8');
	})
	.then(data => {
		console.log(data.toString());
		return readFile1('file3.txt', 'utf8');
	})
	.then(data => console.log(data))
	.catch(err => console.log(err));

const util = require('util');

const readFile2 = util.promisify(fs.readFile);

readFile2('file1.txt', 'utf8')
	.then(data => {
		console.log(data.toString());
		return readFile2('file2.txt', 'utf8');
	})
	.then(data => {
		console.log(data.toString());
		return readFile2('file3.txt', 'utf8');
	})
	.then(data => console.log(data))
	.catch(err => console.log(err));
