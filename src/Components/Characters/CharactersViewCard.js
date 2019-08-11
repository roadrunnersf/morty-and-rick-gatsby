import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.css'

import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'

//import ContentLoader from "react-content-loader";

const CharactersViewCard = ({ character, linkURL }) => (
	<Card outline color="secondary" style={{ width: '100%', margin: 14 }}>
		<Link to={linkURL}>
			<CardImg src={character.image} />
		</Link>

		<CardHeader tag="h6">{character.name}</CardHeader>
		<CardBody>
			<CardText>Species: {character.species}</CardText>
			<CardText>Gender: {character.gender}</CardText>
			<CardText>Status: {character.status}</CardText>
		</CardBody>
	</Card>
)

// const CharactersViewCard = props => (
//   <ContentLoader style={{ height: props.height, width: props.width }}>
//     <rect x="5%" y="2%" rx="80" ry="16" width="90%" height="95%" />
//   </ContentLoader>
// );
//<Card style={{ width: '100%', height: '100%' }} outline color="secondary">

export default CharactersViewCard
