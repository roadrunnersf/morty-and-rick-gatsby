import React from 'react'
import {Link} from 'gatsby'
import {Jumbotron, Button, Container} from 'reactstrap'

const HomeBox = () => {
	return (
		<Container>
			<Jumbotron style={{padding: '32px 32px'}}>
				<h1 className="display-3">Welcome to Sam's Rick & Morty App</h1>
				<p className="lead">School yourself using the characters page.</p>
				<p className="lead">
					When you're ready, play the Guessing Game to put your Rick & Morty
					character knowledge to the test!
				</p>
				<hr className="my-2" />
				<Link to="/characters/" style={{margin: '3px'}}>
					<Button color="primary">Characters</Button>
				</Link>
				<Link to="/guess/" style={{margin: '3px'}}>
					<Button color="primary">Guessing Game</Button>
				</Link>
			</Jumbotron>
		</Container>
	)
}

export default HomeBox
