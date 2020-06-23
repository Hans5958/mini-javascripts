// This function is copied straight from my freeCodeCamp solution. This solution is crafted by myself.

function convertToRoman(num) {
	return num.toString().split("").sort(() => 1).map(((v, i) => {
		const roman = "IVXLCDM  ".split("")
		let mod = v%5
		let mo5 = Math.floor(v/5)
		let ro1 = roman[i*2]
		let ro5 = roman[i*2+1]
		let ro10 = roman[i*2+2]
		if (mod === 4) {
			if (mo5 - 1) return ro1 + ro5
			else return ro1 + ro10
		} else {
			if (mo5) return ro5 + ro1.repeat(mod)
			else return ro1.repeat(mod)
		}
	})).sort(() => 1).join("")
}
  
convertToRoman(36);

// Alternative solution:

function alternate(num) {
	return num.toString().split("").sort(() => 1).map(((v, i) => {
		const roman = "IVXLCDM  ".split("")
		let mod = v%5
		let mo5 = Math.floor(v/5)
		let ro1 = roman[i*2]
		let ro5 = roman[i*2+1]
		let ro10 = roman[i*2+2]
		return (mod === 4) ? (mo5 - 1) ? ro1 + ro5 : ro1 + ro10 : ((mo5) ? ro5 : "") + ro1.repeat(mod)
	})).sort(() => 1).join("")
}

// Golfed solution:

const golfed = n=>n.toString().split``.sort(_=>1).map(((v,i)=>{r="IVXLCDM  ".split``;m=v%5;f=~~(v/5);x=r[i*2];y=r[i*2+1];z=r[i*2+2];return(m===4)?(f-1)?x+y:x+z:((f)?y:"")+x.repeat(m)})).sort(_=>1).join``
