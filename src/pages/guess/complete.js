import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Jumbotron, Button, Container } from 'reactstrap'

import NavBar from './../../Components/Layout/NavBar'

const Complete = () => {
	return (
		<>
			<Helmet>
				<title>Sam's Rick & Morty App</title>
			</Helmet>

			<NavBar />
			<p>completeeeeeeeeeeeee</p>
		</>
	)
}

export default Complete
