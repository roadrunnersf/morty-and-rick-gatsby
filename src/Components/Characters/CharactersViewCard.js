import React from 'react'
import {Link} from 'gatsby'

import {Card, CardHeader, CardImg, CardBody, CardText} from '../elements/cards'

//import ContentLoader from "react-content-loader";

const CharactersViewCard = ({character, linkURL}) => (
	<Card outline color="secondary" style={{width: '100%'}}>
		<Link to={linkURL}>
			<CardImg src={character.image} alt={character.name} />
		</Link>

		<CardHeader strong>{character.name}</CardHeader>
		<CardBody>
			<CardText>Species: {character.species}</CardText>
			<CardText>Gender: {character.gender}</CardText>
			<CardText>Status: {character.status}</CardText>
		</CardBody>
	</Card>
)

export default CharactersViewCard
