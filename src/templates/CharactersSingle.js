import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import CharactersViewBox from './../Components/Characters/CharactersViewBox'
import NavBar from './../Components/Layout/NavBar.js'

const CharactersSingle = props => {
	const character = props.pageContext
	return (
		<div>
			<Helmet>
				<title>{character.name && character.name}</title>
			</Helmet>
			<NavBar />
			<Link to={`/characters/${parseInt(character.id, 10) + 1}`}>
				{' '}
				<CharactersViewBox character={character} width={300} height={520} />
			</Link>{' '}
		</div>
	)
}

export default CharactersSingle
