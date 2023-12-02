const input = require('./input').split(/\r?\n/)

const colors = ['red', 'green', 'blue']

var parseGame = str => {
	const [ idStr, showings ] = str.split(': ')
	const id = Number(idStr.split('Game ')[1])
	const showingsArr = showings.split('; ')
	const amountMostColors = [0, 0, 0]	// You can make this dynamic, but nah for now
	for (const showing of showingsArr) {
		const colorShowings = showing.split(', ')
		for (const colorShowing of colorShowings) {
			const [amount, color] = colorShowing.split(' ')
			amountMostColors[colors.indexOf(color)] = Math.max(amountMostColors[colors.indexOf(color)], amount) 
		}
	}
	return [id, amountMostColors]
}

console.log(
	input.map(str => {
		// console.log(parseGame(str))
		return parseGame(str)
	}).reduce((acc, [_, amount]) => acc + amount.reduce((acc, i) => acc * i), 0)
)
