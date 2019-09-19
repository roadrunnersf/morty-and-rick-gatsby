import React from 'react'
import {Row, Col} from 'react-styled-flexboxgrid'

import {Progress} from '../elements/progress'
import {Card} from '../elements/cards'
import {Lead} from '../elements/text'
import Layout from './../Layout'

const Complete = ({pics, max, score, wrong}) => {
	return (
		<Layout limitGrid helmet={'Guessing Complete!'}>
			<Row>
				<Col xs={0} md={1} lg={2}></Col>
				<Col xs={12} md={10} lg={8}>
					<Row>
						{pics.map(({name, lastDroppedItem, image, id}) => (
							<Col key={id} xs={6} sm={4} md={4} lg={4}>
								<Card
									success={name === lastDroppedItem.name ? true : undefined}
									danger={name !== lastDroppedItem.name ? true : undefined}>
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
						<Col xs={12} style={{marginLeft: '9px'}}>
							<Lead align={'center'}>
								{score} of {max}
							</Lead>
							<Progress height={'56'}>
								<Progress.Bar success value={score} max={max}></Progress.Bar>
								<Progress.Bar danger value={wrong} max={max}></Progress.Bar>
							</Progress>
						</Col>
					</Row>
				</Col>
				<Col xs={0} md={1} lg={2}></Col>
			</Row>
		</Layout>
	)
}

export default Complete
