import {useState, useEffect} from 'react'
import {randFromList} from '../'

const useRandomCharacters = (data, numberOfCharacters) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		setCharacters(randFromList(data, numberOfCharacters))
	}, [])

	return characters
}

export default useRandomCharacters
