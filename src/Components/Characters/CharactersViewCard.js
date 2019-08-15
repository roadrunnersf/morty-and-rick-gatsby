import React from 'react'
import { Link } from 'gatsby'

import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'

//import ContentLoader from "react-content-loader";

const CharactersViewCard = ({ character, linkURL }) => (
	<Card outline color="secondary" style={{ width: '100%' }}>
		<Link to={linkURL}>
			<CardImg src={character.image} />
		</Link>

		<CardHeader tag="h6" style={{ padding: '6px 6px', textAlign: 'center' }}>
			{character.name}
		</CardHeader>
		<CardBody>
			<CardText>Species: {character.species}</CardText>
			<CardText>Gender: {character.gender}</CardText>
			<CardText>Status: {character.status}</CardText>
		</CardBody>
	</Card>
)

export default CharactersViewCard
