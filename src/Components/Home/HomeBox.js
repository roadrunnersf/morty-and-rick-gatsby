import React from 'react'
import {Link} from 'gatsby'
import {Grid} from 'react-styled-flexboxgrid'

import Button from '../elements/buttons'
import {Heading1, Lead} from '../elements/text'
import {Box} from '../elements/layout'

const HomeBox = () => {
	return (
		<Grid>
			<Heading1 align={'center'}>Welcome to Morty & Rick</Heading1>
			<Lead align={'center'}>School yourself using the characters page.</Lead>
			<Lead align={'center'}>
				When you're ready, play the Guesser to put your Morty & Rick character
				knowledge to the test!
			</Lead>
			<hr />
			<Box.Center>
				<Link to="/characters/">
					<Button animate>Characters</Button>
				</Link>
				<Box.Pad padX={20} />
				<Link to="/guess/">
					<Button animate>Guessing Game</Button>
				</Link>
			</Box.Center>
		</Grid>
	)
}

export default HomeBox
