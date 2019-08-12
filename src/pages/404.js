import React from 'react'
import { Link } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import { Jumbotron, Button } from 'reactstrap'

import Layout from './../Components/Layout'

const Four0Four = ({ location }) => {
	return (
		<Layout helmet={'404'}>
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
		</Layout>
	)
}

export default Four0Four
