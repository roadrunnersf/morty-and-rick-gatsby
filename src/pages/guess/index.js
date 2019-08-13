import React, { useState, useEffect, useCallback } from 'react'
import { graphql, navigate } from 'gatsby'
import update from 'immutability-helper'
import { Container, Row, Col } from 'reactstrap'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.css'

import Pic from './../../Components/Guess/Pic'
import Title from './../../Components/Guess/Title'
import Score from './../../Components/Guess/Score'
import Layout from './../../Components/Layout'

import { shuffle, arrOfObjectsNoFalsyValues } from './../../utils'
import ItemTypes from './../../utils/ItemTypes'

const Guess = ({ data }) => {
	const [pics, setPics] = useState([])
	const [titles, setTitles] = useState([])
	const [scorer, setScorer] = useState([])
	const [droppedBoxTitles, setDroppedBoxTitles] = useState([])

	const characters = data.allCharacters.nodes

	function isDropped(boxTitle) {
		return droppedBoxTitles.indexOf(boxTitle) > -1
	}
	const handleDrop = useCallback(
		(index, item) => {
			const { name } = item
			setDroppedBoxTitles(
				update(droppedBoxTitles, name ? { $push: [name] } : { $push: [] })
			)
			setPics(
				update(pics, {
					[index]: {
						lastDroppedItem: {
							$set: item
						}
					}
				})
			)

			setScorer(prevState =>
				prevState.map(obj => {
					if (obj.hasOwnProperty(pics[index].name)) {
						return { [pics[index].name]: item.name }
					} else {
						return obj
					}
				})
			)
		},
		[droppedBoxTitles, pics]
	)

	useEffect(() => {
		setPics(
			shuffle(characters).map(obj => ({
				...obj,
				accepts: ItemTypes.TITLE,
				lastDroppedItem: null
			}))
		)
		setTitles(
			characters
				.slice()
				.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
				.map(obj => ({ ...obj, type: ItemTypes.TITLE }))
		)
		setScorer(characters.map(o => ({ [o.name]: null })))
	}, [])

	// Navigate to complete page if all pics have matches
	scorer[0] &&
		arrOfObjectsNoFalsyValues(scorer) &&
		navigate('/guess/complete', { state: { scorer, characters } })

	return (
		<DndProvider backend={HTML5Backend}>
			<Layout helmet={'Character Guesser'}>
				<Container>
					<Row>
						<Col xs="10">
							{pics.map(({ accepts, lastDroppedItem, image, name }, index) => (
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
						<Col xs="2">
							{titles.map(({ name, type }, index) => (
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
						<Col>
							<Score scorer={scorer} max={pics.length} />
						</Col>
					</Row>
				</Container>
			</Layout>
		</DndProvider>
	)
}

export default Guess

export const query = graphql`
	query GuessQuery {
		allCharacters(limit: 6) {
			nodes {
				id
				name
				gender
				species
				status
				image
			}
		}
	}
`
