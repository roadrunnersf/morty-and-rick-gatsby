import React from 'react'
import {Link} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import {Jumbotron, Container} from 'reactstrap'
import Button from '../Components/buttons'

import Layout from './../Components/Layout'

const Four0Four = ({location}) => {
	return (
		<Layout helmet={'404'}>
			<Container>
				<Jumbotron>
					<h1 className="display-3">404</h1>
					<hr className="my-2" />
					<p className="lead">
						You tried to go to {location.pathname} and the page does not exist.
					</p>
					<Link to="/">
						<Button animate>Home</Button>
					</Link>
				</Jumbotron>
			</Container>
		</Layout>
	)
}

export default Four0Four
