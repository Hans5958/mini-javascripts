// Set the CSV object

let csv = {
	columns: ["User", []],
	rows: {},
	columnLength: 0
}

// Function to initialize a column. Already existing rows will get their columns added.

const initializeColumn = column => {
	csv.columns[1].push(column) 
	csv.columnLength = csv.columns[1].length
	Object.keys(csv.rows).forEach(row => {
		while (csv.rows[row].length < csv.columnLength) {
			csv.rows[row].push("")
		} 
	})
}

// Function to initialize a column, with it's columns added according to the length.

const initializeRow = row => {
	if (csv.rows.hasOwnProperty(row)) return
	csv.rows[row] = []
	while (csv.rows[row].length < csv.columnLength) {
		csv.rows[row].push("")
	}
}

// Function to push a subreddit and it's mods to the .csv function.

const pushToCSV = (subreddit, mods) => {
	initializeColumn(subreddit)
	mods.forEach(mod => {
		if (!csv.rows.hasOwnProperty(mod)) initializeRow(mod)
		csv.rows[mod][csv.rows[mod].length-1] = 1
	})
}

// Function to export a .csv file. Well, not exactly. It just outputs a log that you could copy to a .csv file.

const exportCSV = () => {
	let csvString = `${csv.columns[0]},${csv.columns[1].join(",")}\n`
	Object.entries(csv.rows).forEach(row => {
		// console.log(`${row[0],row[1].join(",")}\n`)
		csvString += `${row[0]},${row[1].join(",")}\n`
	})
	return csvString
}


// This part have been seperated for confidential purposes.
// Here's an example, if you want it.

/*
pushToCSV("r/pics", "cwenham _BindersFullOfWomen_ tragopanic adeadhead RamsesThePigeon N8theGr8 n_reineke xRaw-HD PicsMod JoyousCacophony PussyWhistle remiel relaxlu noeatnosleep terminal_mole NegativeTwelfth SnowPhoenix9999 JaneksBlackBox SuzyModQ jamt9000 deliteplays bigslothonmyface whyhellomichael pics-moderator ispyscreenshots MAGIC_EYE_BOT Lil_SpazJoekp GuitarFreak027 Sunkisty SeriousSamStone yummytuber daninger4995 Emmx2039 SaatvikRamani Kylel6".split(" "))
*/

require("./private.js")().forEach(array => {
	pushToCSV(...array)
})

console.log(exportCSV()) 