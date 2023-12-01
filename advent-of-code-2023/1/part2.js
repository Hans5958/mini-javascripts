const input = require('./input')

var numDict = {
	'one': 1,
	'two': 2,
	'three': 3,
	'four': 4,
	'five': 5,
	'six': 6,
	'seven': 7,
	'eight': 8,
	'nine': 9,
}

var parseInt = str => {
	if (numDict[str]) return numDict[str]
	return Number(str)
}

console.log(input.split('\n').map(str => {
	const left = str.match(/(\d|one|two|three|four|five|six|seven|eight|nine).*/)[1]
	const right = str.match(/.*(\d|one|two|three|four|five|six|seven|eight|nine)/)[1]
	return [str, left, right]
	// console.log(found.map(el => el[1]))
	// console.log(str, found[0][0], found[found.length - 1][0])
	// return [str, found[0][0], found[found.length - 1][0]]
}).reduce((acc, [str, left, right]) => {
	// console.log(str, left, right)
	return acc + parseInt(left) * 10 + parseInt(right)
}, 0))