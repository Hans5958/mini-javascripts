// The solution is made so only one line differs from part-1.js, the input line.

const input = require('./input').split(/\r?\n/).map(el => el.split(':')[1].split(' ').filter(el => el).join('').split(' ').map(el => Number(el)))

let ways = 1

for (let i in input[0]) {
	const timeAvailable = input[0][i]
	const recordDistance = input[1][i]
	
	for (let timeHeld = 0; timeHeld < timeAvailable / 2; timeHeld++) {
		const timeRunning = timeAvailable - timeHeld
		if (timeRunning * timeHeld <= recordDistance) continue
		ways *= timeAvailable + 1 - timeHeld * 2
		break
	}
}

console.log(ways)