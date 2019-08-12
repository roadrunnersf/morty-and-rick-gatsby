import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'

import CharactersView from './../Components/Characters/CharactersView'
import NavBar from './../Components/Layout/NavBar'

import { randFromList } from './../utils/index'

const Characters = ({ data }) => {
	const [characters, setCharacters] = useState([])

	useEffect(() => {
		setCharacters(randFromList(data.allCharacters.nodes, 20))
	}, [])

	return (
		<>
			<Helmet>
				<title>Character Viewer</title>
			</Helmet>
			<NavBar />

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
