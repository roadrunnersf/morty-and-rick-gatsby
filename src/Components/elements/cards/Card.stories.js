import React from 'react'
import {storiesOf} from '@storybook/react'

import {Card, CardHeader, CardImg, CardBody, CardText} from './'

storiesOf('Card/', module).add('Card Full', () => (
	<div style={{width: 285}}>
		<Card>
			<CardImg src="https://rickandmortyapi.com/api/character/avatar/172.jpeg" />
			<CardHeader strong>Character</CardHeader>
			<CardBody>
				<CardText>Name: Sam Samson</CardText>
				<CardText>Gender: Male</CardText>
				<CardText>Status: Dead</CardText>
			</CardBody>
		</Card>
	</div>
))

storiesOf('Card/', module).add('Card', () => (
	<div style={{width: 250, height: 400}}>
		<Card>Characters</Card>
	</div>
))
