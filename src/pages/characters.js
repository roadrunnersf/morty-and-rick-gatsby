import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'

import CharactersView from './../Components/Characters/CharactersView'
import Layout from './../Components/Layout'

import { randFromList } from './../utils/index'

const Characters = ({ data }) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		setCharacters(randFromList(data.allCharacters.nodes, 20))
	}, [])

	return (
		<Layout helmet={'Character Viewer'}>
			<CharactersView characters={characters} />
		</Layout>
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
