// This function is copied straight from my freeCodeCamp solution. This solution is crafted by myself.

function palindrome(str) {
	var arr = str.toLowerCase().replace(/[^a-z0-9]/g, "").split("")
	var ret = true
	arr.forEach((v, i) => {
		if ([...arr].reverse()[i] !== v) ret = false
	})
	return ret
}

palindrome("odd or even");