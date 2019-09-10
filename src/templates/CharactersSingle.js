import React from 'react'

import {CharacterCard} from '../Components/elements/cards'
import Layout from './../Components/Layout'

const CharactersSingle = props => {
	const character = props.pageContext
	return (
		<Layout helmet={character.name}>
			<div style={{width: 250}}>
				<CharacterCard
					character={character}
					linkURL={`/characters/${parseInt(character.id, 10) + 1}/`}
				/>
			</div>
		</Layout>
	)
}

export default CharactersSingle
