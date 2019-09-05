import React from 'react'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'

import Pic from './Pic'
import Title from './Title'
import Score from './Score'
import Layout from './../Layout'

const GuessView = ({
	pics,
	titles,
	score,
	wrong,
	handleDrop,
	droppedBoxTitles,
}) => {
	function isDropped(boxTitle) {
		return droppedBoxTitles.indexOf(boxTitle) > -1
	}

	return (
		<Layout helmet={'Character Guesser'}>
			<Grid>
				<Row>
					<Col xs={10}>
						<Row>
							{pics.map(({accepts, lastDroppedItem, image, name}, index) => (
								<Col xs={4}>
									<Pic
										image={image}
										name={name}
										accept={accepts}
										lastDroppedItem={lastDroppedItem}
										onDrop={item => handleDrop(index, item)}
										key={index}
									/>
								</Col>
							))}
						</Row>
					</Col>
					<Col xs={2} style={{paddingLeft: '24px', marginTop: '9px'}}>
						{titles.map(({name, type}, index) => (
							<Row key={index}>
								<Title
									name={name}
									type={type}
									isDropped={isDropped(name)}
									key={index}
								/>
							</Row>
						))}
					</Col>
				</Row>
				<Row>
					<Col xs={10} style={{marginLeft: '9px', marginTop: '12px'}}>
						<Score pics={pics} max={pics.length} score={score} wrong={wrong} />
					</Col>
				</Row>
			</Grid>
		</Layout>
	)
}

export default GuessView
