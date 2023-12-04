const input = require('./input').split(/\r?\n/).map(el => el.split(''))

const numbers = '1234567890'.split('')

const replaceNumber = (input, i, j) => {
	const maxLength = input[0].length
	// console.log(i, j)
	if (i < 0 || j < 0 || i >= input.length || j >= maxLength || !numbers.includes(input[i][j])) return 0

	let numberGot = input[i][j]
	input[i][j] = '.'
	let offset = 0
	while (true) {
		offset -= 1
		const jOffset = j + offset 
		if (jOffset < 0 || !numbers.includes(input[i][jOffset])) break
		numberGot = input[i][jOffset] + numberGot 
		input[i][jOffset] = 0
	}
	offset = 0
	while (true) {
		offset += 1
		const jOffset = j + offset 
		if (jOffset >= maxLength || !numbers.includes(input[i][jOffset])) break
		numberGot = numberGot + input[i][jOffset] 
		input[i][jOffset] = 0
	}
	// console.log(numberGot)
	return Number(numberGot)
}

let total = 0

for (let i in input) {
	i = Number(i)
	for (let j in input[i]) {
		j = Number(j)
		if (input[i][j] !== '*') continue
		const ratios = []
		// console.log(i, j, input[i][j])
		for (let iOffset = -1 ; iOffset <= 1; iOffset++) {
			for (let jOffset = -1 ; jOffset <= 1; jOffset++) {
				const numberGot = replaceNumber(input, i + iOffset, j + jOffset)
				if (numberGot) ratios.push(numberGot)
			}
		}
		// console.log(ratios)
		if (ratios.length !== 2) continue
		total += ratios[0] * ratios[1]
	}
}

console.log(total)