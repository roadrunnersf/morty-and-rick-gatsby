// LIST GENERATION AND MANIPULATION

const integerList = (start, length) => {
	return Array.from({ length: length }, (v, k) => k + start)
}

const randList = (numMax, outputLength) => {
	let array = integerList(1, numMax)
	array = shuffle(array)
	return array.slice(0, outputLength)
}

const randFromList = (oldArray, outputLength) => {
	let array = shuffle(oldArray)
	return array.slice(0, outputLength)
}

const shuffle = oldArray => {
	let array = [...oldArray]
	var i = 0,
		j = 0,
		temp = null

	for (i = array.length - 1; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1))
		temp = array[i]
		array[i] = array[j]
		array[j] = temp
	}
	return array
}

const createCharacterList = matchObject => {
	const matchNum = matchObject.params.num

	const minItems = 2
	const maxItems = 8
	const defaultItems = 6

	let charIDs = undefined

	switch (true) {
		case matchNum > maxItems:
			charIDs = randList(493, maxItems)
			break
		case matchNum === 'test':
			charIDs = [1, 2, 3, 4]
			break
		case minItems <= matchNum && matchNum <= maxItems:
			charIDs = randList(493, matchNum)
			break
		case matchObject.path === '/guess':
		case matchNum < minItems:
		default:
			charIDs = randList(493, defaultItems)
			break
	}
	return charIDs
}

// ARRAYS OF OBJECTS

const arrKeys = arr => {
	return arr.map(obj => {
		return Object.keys(obj)[0]
	})
}

const arrVals = arr => {
	return arr.map(obj => {
		return Object.values(obj)[0]
	})
}

const arrMatches = arr => {
	const keys = arrKeys(arr)
	const values = arrVals(arr)
	let counter = 0
	for (var i = 0; i < arr.length; i++) {
		keys[i] === values[i] && counter++
	}
	return counter
}

// const arrWrongOLD = arr => {
// 	const keys = arrKeys(arr)
// 	const values = arrVals(arr)
// 	let counter = 0
// 	for (var i = 0; i < arr.length; i++) {
// 		values[i] && keys[i] !== values[i] && counter++
// 	}
// 	return counter
// }

const arrGuesses = arr => {
	const values = arrVals(arr)
	let counter = 0
	for (var i = 0; i < arr.length; i++) {
		values[i] && counter++
	}
	return counter
}

const arrOfObjectsNoFalsyValues = arr => {
	return arr[0] ? !arrVals(arr).some(i => !i) : false
	// return !arrVals(arr).some(i => !i)
}

const addMatches = (scorer, characters) => {
	const scorKeys = arrKeys(scorer)
	const scorVals = arrVals(scorer)
	characters.forEach(obj => {
		for (var i = 0; i < scorKeys.length; i++) {
			if (obj.name === scorKeys[i]) {
				obj.match = scorVals[i]
			}
		}
	})
	return characters
}

const arrScore = arr => {
	let counter = 0
	for (var i = 0; i < arr.length; i++) {
		arr[i].lastDroppedItem &&
			arr[i].name === arr[i].lastDroppedItem.name &&
			counter++
	}
	return counter
}
const arrWrong = arr => {
	let counter = 0
	for (var i = 0; i < arr.length; i++) {
		arr[i].lastDroppedItem &&
			arr[i].name !== arr[i].lastDroppedItem.name &&
			counter++
	}
	return counter
}

const arrLDITotal = arr => {
	let counter = 0
	for (var i = 0; i < arr.length; i++) {
		arr[i].lastDroppedItem &&
			arr[i].name !== arr[i].lastDroppedItem.name &&
			counter++
	}
	return counter
}

const picsComplete = arr => {
	return !arr.every(obj => obj.lastDroppedItem)
}

export {
	randList,
	randFromList,
	shuffle,
	createCharacterList,
	arrKeys,
	arrVals,
	arrMatches,
	// arrWrongOLD,
	arrWrong,
	arrGuesses,
	arrOfObjectsNoFalsyValues,
	addMatches,
	arrScore,
	arrLDITotal,
	picsComplete
}
