import React, {useState, useEffect} from 'react'
import {graphql} from 'gatsby'

import CharactersView from './../Components/Characters/CharactersView'
import Layout from './../Components/Layout'

import {randFromList} from './../utils'

const Characters = ({data}) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		setCharacters(randFromList(data.allCharacters.nodes, 20))
	}, [data.allCharacters.nodes])

	return (
		<>
			<Layout helmet={'Character Viewer'} />
			<CharactersView characters={characters} />
		</>
	)
}

export default Characters

export const query = graphql`
	query CharactersQuery {
		allCharacters {
			nodes {
				id
				name
				gender
				species
				status
				image
			}
		}
	}
`
