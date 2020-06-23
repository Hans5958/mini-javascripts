// This function is copied straight from my freeCodeCamp solution. This solution is crafted by myself.

function telephoneCheck(str) {
	return /^(1[- ]?)?(\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}$/.test(str);
}
  
telephoneCheck("555-555-5555");

// Golfed solution:

const golfed = s=>/^(1[- ]?)?(\d{3}|\(\d{3}\))[- ]?\d{3}[- ]?\d{4}$/.test(s)