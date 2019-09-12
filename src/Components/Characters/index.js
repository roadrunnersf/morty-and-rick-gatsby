import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import {CharacterCard} from '../elements/cards'
import Layout from '../Layout'

import useRandomCharacters from '../../utils/hooks/randomCharacters'

const Characters = ({data}) => {
	console.log('data:', data)
	const characters = useRandomCharacters(data.allCharacters.nodes, 20)

	return (
		<Layout helmet={'Character Viewer'}>
			<Grid>
				<Row>
					{characters.map((character, index) => (
						<Col xs={6} sm={4} md={4} lg={3} key={character.id}>
							<CharacterCard
								key={character.id}
								character={character}
								linkURL={`/characters/${character.id}/`}
							/>
						</Col>
					))}
				</Row>
			</Grid>
		</Layout>
	)
}

export default Characters
