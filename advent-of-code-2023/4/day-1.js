const input = require('./input').split(/\r?\n/).map(el => el.split(': ')[1]).map(s => s.split(' | ')).map(arr => arr.map(s => s.split(' ').filter(a => a)))

console.log(input.map(s => {
	const [winning, my] = s
	// console.log(my.filter(el => winning.includes(el)))
	return my.filter(el => winning.includes(el)).length
}).reduce((acc, curr) => acc + Math.floor(2**(curr - 1)), 0))