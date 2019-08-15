import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import CharactersViewCard from './../Components/Characters/CharactersViewCard'
import Layout from './../Components/Layout'

const CharactersSingle = props => {
	const character = props.pageContext
	return (
		<Layout helmet={character.name}>
			<div style={{ width: 250 }}>
				<CharactersViewCard
					character={character}
					linkURL={`/characters/${parseInt(character.id, 10) + 1}`}
				/>
			</div>
		</Layout>
	)
}

export default CharactersSingle
