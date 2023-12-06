const input = require('./input').split(/\r?\n\r?\n/)

let [seeds, ...maps] = input.map(el => el.split(/:\s+/)[1].split(/\r?\n/).map(el => el.split(' ').map(el => Number(el))))

seeds = seeds[0].reduce((acc, cur) => {
	// console.log(acc[acc.length - 1].length)
	if (acc[acc.length - 1].length === 2) acc.push([])
	acc[acc.length - 1].push(cur)
	return acc
}, [[]])

// const mapped = []

let lowest = Infinity

// console.log(maps)

// Starting from 0 would take a long time...
// The answer is 69841803.

const lowerLimit = 69700000
const upperLimit = 69900000
const checkRange = upperLimit - lowerLimit

maps = maps.reverse()

a: for (let i = lowerLimit; i < upperLimit; i++) {
	let seed = i
	for (const map of maps) {
		// console.log(map)
		c: for (const [src, dest, len] of map) {
			if (src <= seed && seed < src + len) {
				seed = seed - src + dest
				break c
			}
		}		
	}
	// console.log(seed)
	for (let [seedStart, seedLen] of seeds) {
		// console.log(seed)
		if (seedStart <= seed && seed < seedStart + seedLen) {
			console.log(i)
			break a
		}
	}
	if (i % 100000 === 0) console.log('check', i, Math.round((i/upperLimit) * 10000)/100)

}

// Alternatives follows.

// let seedCheck = 0

// for (let [seedStart, seedLen] of seeds) {
// 	console.log(seedStart, seedLen)
	
// 	seedCheck = 0
// 	// Super naive solution! It is so slow!
// 	for (let i = 0; i < seedLen; i++) {
// 		let seed = seedStart + i
// 		// console.log(seed)
// 		for (const map of maps) {
// 			// console.log('-->', map)
// 			c: for (const [dest, src, len] of map) {
// 				if (src <= seed && seed < src + len) {
// 					// console.log('-->', dest, src, len, src + len)
// 					seed = seed - src + dest
// 					break c
// 				}
// 			}
// 			// console.log(seed)
// 			// console.log(map)
// 		}
// 		// console.log()
// 		// mapped.push(seed)
// 		// lowest = Math.min(lowest, seed)
// 		if (lowest > seed) {
// 			console.log(seed)
// 			lowest = seed
// 			seedCheck = 0
// 		}
// 		seedCheck++
// 		if (seedCheck % 100000 === 0) console.log('check', seedCheck, seedLen)
// 		if (seedCheck > seedLen * 0.1) break
// 	}
// }

// console.log(mapped)
// console.log(lowest)