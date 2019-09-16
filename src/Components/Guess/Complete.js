import React from 'react'
import {Progress} from 'reactstrap'
import {Row, Col} from 'react-styled-flexboxgrid'

import {Card} from '../elements/cards'
import {Paragraph} from '../elements/text'
import Layout from './../Layout'

const Complete = ({pics, max, score, wrong}) => {
	return (
		<Layout helmet={'Guessing Complete!'}>
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
									<Card.Img
										src={image}
										alt={`Correct name: ${name}, Dropped name: ${lastDroppedItem.name}`}
									/>
									<Card.Header>
										{name === lastDroppedItem.name
											? lastDroppedItem.name
											: `Correct answer: ${name}`}
									</Card.Header>
								</Card>
							</Col>
						))}
					</Row>
					<Row>
						<Col xs={12} style={{padding: '7px'}}>
							<Paragraph align={'center'}>
								{score} of {max}
							</Paragraph>
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
		</Layout>
	)
}

export default Complete
