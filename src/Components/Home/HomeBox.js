import React from 'react'
import {Link} from 'gatsby'
import {Grid} from 'react-styled-flexboxgrid'

import Button from '../elements/buttons'
import {Heading1, Lead} from '../elements/text'

const HomeBox = () => {
	return (
		<Grid>
			<Heading1>Welcome to Morty and Rick</Heading1>
			<Lead>School yourself using the characters page.</Lead>
			<Lead>
				When you're ready, play the Guessing Game to put your Rick & Morty
				character knowledge to the test!
			</Lead>
			<hr />
			<Link to="/characters/">
				<Button animate>Characters</Button>
			</Link>
			<Link to="/guess/">
				<Button animate>Guessing Game</Button>
			</Link>
		</Grid>
	)
}

export default HomeBox
