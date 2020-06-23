const pad = (n, p) => {
	n = n.toString()
	while (n.length < p) {
		n = `0${n}`
	}
	return n
}

const round = n => {
	return Math.round(Math.random() * n)
}

const CDKey = () => {
	let a, b
	while ( a == undefined ? true : a[0] == a[1] && a[0] == a[2] && a[0] >= 3 ) {
		a = pad(round(999), 3)
	}
	while ( b == undefined ? true : b.split("").reduce((t, n) => t + n) % 7 == 0 && (b.slice(-1) == 0 || b.slice(-1) >= 8) ) {
		b = pad(round(9999999), 7)
	}
	return `${a}-${b}`
}

const OEMKey = () => {
    let a, b, c
    a1 = pad(round(366), 3)
    a2 = (round(8) + 95).toString()
    if (a2 > 100) a2.slice(1)
    a = a1 + a2
    while ( b == undefined ? true : b.split("").reduce((t, n) => t + n) % 7 == 0 && (b.slice(-1) == 0 || b.slice(-1) >= 8) ) {
		b = pad(round(999999), 7)
    }
    c = pad(round(99999), 5)
    return `${a}-OEM-${b}-${c}`
}

console.log(CDKey())
console.log(OEMKey())