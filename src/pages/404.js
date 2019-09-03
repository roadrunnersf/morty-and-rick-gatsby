import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'gatsby'
import {Grid} from 'react-styled-flexboxgrid'

import {Jumbotron} from '../Components/elements/jumbotron'
import {Button} from '../Components/elements/buttons'
import Layout from './../Components/Layout'
import {Heading1, Lead} from '../Components/elements/text/index'

const Four0Four = ({location}) => {
	return (
		<Layout helmet={'404'}>
			<Grid>
				<Jumbotron>
					<Heading1>404</Heading1>
					<hr />
					<Lead>
						You tried to go to {location.pathname} and the page does not exist.
					</Lead>
					<Link to="/">
						<Button animate>Home</Button>
					</Link>
				</Jumbotron>
			</Grid>
		</Layout>
	)
}

export default Four0Four
