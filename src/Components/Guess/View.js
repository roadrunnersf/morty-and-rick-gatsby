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
						{pics.map(({accepts, lastDroppedItem, image, name}, index) => (
							<Pic
								image={image}
								name={name}
								accept={accepts}
								lastDroppedItem={lastDroppedItem}
								onDrop={item => handleDrop(index, item)}
								key={index}
							/>
						))}
					</Col>
					<Col xs={2}>
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
					<Col xs={10}>
						<Score pics={pics} max={pics.length} score={score} wrong={wrong} />
					</Col>
				</Row>
			</Grid>
		</Layout>
	)
}

export default GuessView
