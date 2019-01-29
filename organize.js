const fs = require('fs');

let listOfNames =fs.readFileSync('names.txt', 'utf8')

function alp (contents) {
	// I'm commenting to test out a pull request
	let a = contents.split("\n").sort();
	let b = a.join("\n");
	console.log('Total of ' + a.length + " names");
	console.log("-----------------------------");
	return b
		// let count=num of names;
	//	console.log('Total of ' + count + " names");
	//	console.log('--------------------');
		//split by each new line into an array
	//use sort method on array
	//join array by new lines
};
console.log(alp(listOfNames));
