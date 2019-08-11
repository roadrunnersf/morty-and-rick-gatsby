import React from 'react'
import { Link } from 'gatsby'
import { Jumbotron, Button, Container } from 'reactstrap'

const HomeBox = () => {
	return (
		<Container>
			<Jumbotron>
				<h1 className="display-3">Welcome to Sam's Rick & Morty App</h1>
				<p className="lead">This is a brief explanation of the site</p>
				<hr className="my-2" />
				<p>Click below to go to the characters page </p>
				<p className="lead">
					<Link to="/characters/">
						<Button color="primary">Characters</Button>
					</Link>
				</p>
			</Jumbotron>
		</Container>
	)
}

export default HomeBox
