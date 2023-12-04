const input = require('./input').split(/\r?\n/).map(el => el.split(': ')[1]).map(s => s.split(' | ')).map(arr => arr.map(s => s.split(' ').filter(a => a)))

const memory = []

const check = i => {
	i = Number(i)

	if (!input[i]) return 0
	memory[i] ??= 0
	memory[i] += 1

	const [winning, my] = input[i]
	let myWin = my.filter(el => winning.includes(el)).length
	// console.log(myWin, memory[i])

	for (let j = 1; j <= myWin; j++) {
		// console.log(`i + j: ${i + j}`)
		// console.log(`bef memory[i + j]: ${memory[i + j]}`)
		memory[i + j] ??= 0
		memory[i + j] += memory[i]
		// console.log(`aft memory[i + j]: ${memory[i + j]}`)
	}
	return memory[i]
}

// for (const i in input) {
// 	console.log(`i = ${i}`)
// 	check(i)
// }

console.log(input.reduce((acc, _, i) => acc + check(i), 0))
console.log(JSON.stringify(memory))