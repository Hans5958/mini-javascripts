// This function is copied straight from my freeCodeCamp solution. This solution is crafted by myself.

function rot13(str) {
	const list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
	return str.split("").map(char => {
		if (list.indexOf(char) > -1) return list[(list.indexOf(char)+13)%26]
		else return char
	}).join("");
  }
  
rot13("SERR PBQR PNZC");