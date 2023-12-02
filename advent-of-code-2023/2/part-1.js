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

const amountTarget = [12, 13, 14]

console.log(
	input.map(str => {
		// console.log(parseGame(str))
		return parseGame(str)
	}).filter(
		([_, amount]) => {
			const decision = !(amount.filter(
				(value, index) => {
					// console.log(value, amountTarget[index], value < amountTarget[index])
					return value > amountTarget[index]
				}
			).length)
			// console.log(decision, amount)
			return decision
		}
	).reduce((acc, [id, _]) => acc + id, 0)
)
