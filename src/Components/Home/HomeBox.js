import React from 'react'
import {Link} from 'gatsby'
import {Jumbotron, Container} from 'reactstrap'
import Button from '../buttons'

const HomeBox = () => {
	return (
		<Container>
			<Jumbotron style={{marginTop: '22px', padding: '32px 32px'}}>
				<h1 className="display-3">Welcome to Sam's Rick & Morty App</h1>
				<p className="lead">School yourself using the characters page.</p>
				<p className="lead">
					When you're ready, play the Guessing Game to put your Rick & Morty
					character knowledge to the test!
				</p>
				<hr className="my-2" />
				<p></p>
				<Link to="/characters/">
					<Button animate>Characters</Button>
				</Link>
				<Link to="/guess/">
					<Button animate>Guessing Game</Button>
				</Link>
			</Jumbotron>
		</Container>
	)
}

export default HomeBox
