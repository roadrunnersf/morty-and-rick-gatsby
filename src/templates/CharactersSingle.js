import React from 'react'
import { Helmet } from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css'

import CharactersViewCard from './../Components/Characters/CharactersViewCard'
import NavBar from './../Components/Layout/NavBar.js'

const CharactersSingle = props => {
	const character = props.pageContext
	return (
		<>
			<Helmet>
				<title>{character.name && character.name}</title>
			</Helmet>
			<NavBar />
			<div style={{ width: 250 }}>
				<CharactersViewCard
					character={character}
					linkURL={`/characters/${parseInt(character.id, 10) + 1}`}
				/>
			</div>
		</>
	)
}

export default CharactersSingle
