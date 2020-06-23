// This function is copied straight from my freeCodeCamp solution. This solution is crafted by myself.
// This one is quite a pain.

function checkCashRegister(price, cash, cid) {
	var changeP = cash - price
	if (changeP === cid.map(n => n[1]).reduce((t, n) => t+n)) return {status: "CLOSED", change: cid}
	cid.reverse()
	var change = {}
	var dict = {
		"PENNY": 0.01,
		"NICKEL": 0.05,
		"DIME": 0.1,
		"QUARTER": 0.25,
		"ONE": 1,
		"FIVE": 5,
		"TEN": 10,
		"TWENTY": 20,
		"ONE HUNDRED": 100
	}
	var calc = cid.forEach((cash, index) => {
		while (! (cash[1] < dict[cash[0]] || cash[1] === 0 || changeP === 0 || changeP < dict[cash[0]])) {
			cid[index][1] = Math.round((cid[index][1] - dict[cash[0]])*100)/100
			changeP = Math.round((changeP - dict[cash[0]])*100)/100
			if (! change[cash[0]]) change[cash[0]] = 0
			change[cash[0]] = Math.round((change[cash[0]] +dict[cash[0]])*100)/100 
		}
	})
		if (changeP === 0) return {status: "OPEN", change: Object.entries(change).sort((a, b) => {
		return Object.entries(dict).indexOf(b[0]) - Object.entries(dict).indexOf(a[0])
	})}
	else return {status: "INSUFFICIENT_FUNDS", change: []}
}

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])