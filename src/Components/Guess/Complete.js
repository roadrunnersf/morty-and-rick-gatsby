import React from 'react'
import {Progress} from 'reactstrap'
import {Grid, Row, Col} from 'react-styled-flexboxgrid'

import {Card, CardImg, CardHeader} from '../elements/cards'
import {Jumbotron} from '../elements/jumbotron'
import Layout from './../Layout'

const Complete = ({pics, max, score, wrong}) => {
	return (
		<Layout helmet={'Guessing Complete!'}>
			<Grid>
				<Jumbotron style={{paddingTop: '1rem'}}>
					<Row>
						<Col xs={0} lg={1}></Col>
						<Col xs={12} lg={10}>
							<Row>
								{pics.map(({name, lastDroppedItem, image, id}) => (
									<Col key={id} sm={6} md={4} style={{padding: '7px'}}>
										<Card
											success={name === lastDroppedItem.name ? true : undefined}
											danger={name !== lastDroppedItem.name ? true : undefined}
											style={{width: '100%'}}>
											<CardImg
												src={image}
												alt={`Correct name: ${name}, Dropped name: ${lastDroppedItem.name}`}
											/>
											<CardHeader>
												{name === lastDroppedItem.name
													? lastDroppedItem.name
													: `Correct answer: ${name}`}
											</CardHeader>
										</Card>
									</Col>
								))}
							</Row>
							<Row>
								<Col xs={12} style={{padding: '7px'}}>
									<p></p>
									<div className="text-center">
										{score} of {max}
									</div>
									<Progress animated multi max={max} style={{height: 40}}>
										<Progress
											bar
											animated
											color="success"
											value={score}
											max={max}></Progress>

										<Progress
											bar
											animated
											color="danger"
											value={wrong}
											max={max}></Progress>
									</Progress>
								</Col>
							</Row>
						</Col>
						<Col xs={0} lg={1}></Col>
					</Row>
				</Jumbotron>
			</Grid>
		</Layout>
	)
}

export default Complete
