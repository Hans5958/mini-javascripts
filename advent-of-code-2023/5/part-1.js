const input = require('./input').split(/\r?\n\r?\n/)

let [seeds, ...maps] = input.map(el => el.split(/:\s+/)[1].split(/\r?\n/).map(el => el.split(' ').map(el => Number(el))))

seeds = seeds[0]

// const mapped = []

let lowest = Infinity

// console.log(maps)

for (let seed of seeds) {
	// console.log(seed)
	for (const map of maps) {
		// console.log('-->', map)
		c: for (const [dest, src, len] of map) {
			if (src <= seed && seed < src + len) {
				// console.log('-->', dest, src, len, src + len)
				seed = seed - src + dest
				break c
			}
		}
		// console.log(seed)
		// console.log(map)
	}
	// console.log()
	// mapped.push(seed)
	lowest = Math.min(lowest, seed)
}

// console.log(mapped)
console.log(lowest)