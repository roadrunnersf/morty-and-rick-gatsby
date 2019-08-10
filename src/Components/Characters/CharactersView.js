import React from 'react'
import { Link } from 'gatsby'

import CharactersViewBox from './CharactersViewBox'

const CharactersView = ({ characters }) => {
	return (
		<div>
			{characters.map((character, index) => (
				<div
					key={character.id}
					style={{
						display: 'inline-block',
						padding: 5
					}}
				>
					<Link to={`/characters/${character.id}`}>
						<CharactersViewBox
							key={character.id}
							character={character}
							width={250}
							height={450}
						/>
					</Link>
				</div>
			))}
		</div>
	)
}

export default CharactersView
