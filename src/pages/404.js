import React from 'react'
import {Link} from 'gatsby'
import {Grid} from 'react-styled-flexboxgrid'

import {Jumbotron} from '../Components/elements/jumbotron'
import Button from '../Components/elements/buttons'
import Layout from './../Components/Layout'

const Four0Four = ({location}) => {
	return (
		<Layout helmet={'404'}>
			<Grid>
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
			</Grid>
		</Layout>
	)
}

export default Four0Four
