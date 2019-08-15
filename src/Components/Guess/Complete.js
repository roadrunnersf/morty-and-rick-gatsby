import React from 'react'
import {
	Jumbotron,
	Container,
	Card,
	CardImg,
	CardHeader,
	Row,
	Col,
	Progress,
} from 'reactstrap'

import Layout from './../Layout'

const Complete = ({pics, max, score, wrong}) => {
	return (
		<Layout helmet={'Guessing Complete!'}>
			<Container>
				<Jumbotron style={{paddingTop: '1rem'}}>
					<Row>
						<Col xs="0" lg="1"></Col>
						<Col xs="12" lg="10">
							<Row>
								{pics.map(({name, lastDroppedItem, image, id}, index) => (
									<Col key={id} sm="6" md="4" style={{padding: '7px'}}>
										<Card
											inverse
											color={
												name === lastDroppedItem.name ? 'success' : 'danger'
											}
											style={{width: '100%'}}>
											<CardImg src={image} />
											<CardHeader style={{padding: '6px 6px'}}>
												{name === lastDroppedItem.name
													? lastDroppedItem.name
													: `Correct answer: ${name}`}
											</CardHeader>
										</Card>
									</Col>
								))}
							</Row>
							<Row>
								<Col style={{padding: '7px'}}>
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
						<Col xs="0" lg="1"></Col>
					</Row>
				</Jumbotron>
			</Container>
		</Layout>
	)
}

export default Complete
