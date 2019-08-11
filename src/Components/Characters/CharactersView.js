import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import CharactersViewCard from './CharactersViewCard'

const CharactersView = ({ characters }) => {
	return (
		<Container>
			<Row>
				{characters.map((character, index) => (
					<Col xs="6" sm="6" md="4" lg="3" xl="3" key={character.id}>
						<CharactersViewCard
							key={character.id}
							character={character}
							linkURL={`/characters/${character.id}`}
						/>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export default CharactersView
