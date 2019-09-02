import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import CharactersViewCard from './CharactersViewCard'

const CharactersView = ({characters}) => {
	return (
		<Grid>
			<Row>
				{characters.map((character, index) => (
					<Col
						xs={6}
						sm={6}
						md={4}
						lg={3}
						xl={3}
						key={character.id}
						style={{padding: '9px 9px'}}>
						<CharactersViewCard
							key={character.id}
							character={character}
							linkURL={`/characters/${character.id}/`}
						/>
					</Col>
				))}
			</Row>
		</Grid>
	)
}

export default CharactersView
