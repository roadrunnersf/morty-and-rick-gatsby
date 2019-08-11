import React from 'react'
import { Link } from 'gatsby'

import { Jumbotron, Button } from 'reactstrap'

import NavBar from './../Components/Layout/NavBar'

const Four0Four = ({ location }) => {
	return (
		<>
			<NavBar />

			<Jumbotron>
				<h1 className="display-3">404</h1>
				<hr className="my-2" />
				<p className="lead">
					You tried to go to {location.pathname} and the page does not exist.
				</p>
				<Button color="success">
					<Link to="/">Home</Link>
				</Button>
			</Jumbotron>
		</>
	)
}

export default Four0Four
