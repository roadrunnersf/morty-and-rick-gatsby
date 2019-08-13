import React from 'react'
import { graphql, navigate } from 'gatsby'
import {
	Jumbotron,
	Button,
	Container,
	Card,
	CardImg,
	CardHeader,
	Row,
	Col,
	Progress
} from 'reactstrap'

import Layout from './../../Components/Layout'
import { addMatches, arrMatches, arrWrong } from './../../utils'

const Complete = ({ location }) => {
	let scorer = location.state.scorer
	const score = arrMatches(scorer)
	const wrong = arrWrong(scorer)

	let characters = location.state.characters
	characters = addMatches(scorer, characters)
	console.log('characters:', characters)
	let max = score + wrong

	return (
		<Layout helmet={'Guessing Complete!'}>
			<Container>
				<Jumbotron style={{ paddingTop: '1rem' }}>
					<Row>
						<Col xs="0" lg="1"></Col>
						<Col xs="12" lg="10">
							<Row>
								{characters.map(({ name, match, image }, index) => (
									<Col sm="6" md="4" style={{ padding: '7px' }}>
										<Card
											inverse
											color={name === match ? 'success' : 'danger'}
											style={{ width: '100%' }}
										>
											<CardImg src={image} />
											<CardHeader style={{ padding: '6px 6px' }}>
												{name === match ? match : `Correct answer: ${name}`}
											</CardHeader>
										</Card>
									</Col>
								))}
							</Row>
							<Row>
								<Col>
									<div className="text-center">
										{score} of {max}
									</div>
									<Progress animated multi max={max} style={{ height: 40 }}>
										<Progress
											bar
											animated
											color="success"
											value={score}
											max={max}
										></Progress>

										<Progress
											bar
											animated
											color="danger"
											value={wrong}
											max={max}
										></Progress>
									</Progress>
								</Col>
							</Row>
						</Col>
						<Col xs="0" lg="1"></Col>
					</Row>
				</Jumbotron>
			</Container>
		</Layout>
	)
}

export default Complete
