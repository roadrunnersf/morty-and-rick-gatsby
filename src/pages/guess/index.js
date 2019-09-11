import React, {useState, useCallback} from 'react'
import {graphql} from 'gatsby'
import update from 'immutability-helper'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.css'

import GuessView from './../../Components/Guess/View'
import Complete from './../../Components/Guess/Complete'

import ItemTypes from './../../utils/ItemTypes'
import {shuffle, randFromArray, picsComplete} from './../../utils'

const Guess = ({data}) => {
	const characters = randFromArray(data.allCharacters.nodes, 6)

	const [score, setScore] = useState(0)
	const [wrong, setWrong] = useState(0)
	const [droppedBoxTitles, setDroppedBoxTitles] = useState([])

	const [pics, setPics] = useState(
		shuffle(characters).map(obj => ({
			...obj,
			accepts: ItemTypes.TITLE,
			lastDroppedItem: undefined,
		}))
	)
	const [titles] = useState(
		characters
			.slice()
			.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
			.map(obj => ({...obj, type: ItemTypes.TITLE}))
	)

	const handleDrop = useCallback(
		(index, item) => {
			const {name} = item
			setDroppedBoxTitles(
				update(droppedBoxTitles, name ? {$push: [name]} : {$push: []})
			)
			pics[index].name === name
				? setScore(prevState => prevState + 1)
				: setWrong(prevState => prevState + 1)

			setPics(
				update(pics, {
					[index]: {
						lastDroppedItem: {
							$set: item,
						},
					},
				})
			)
		},
		[droppedBoxTitles, pics]
	)

	return (
		<DndProvider backend={HTML5Backend}>
			{!picsComplete(pics) ? (
				<GuessView
					pics={pics}
					titles={titles}
					score={score}
					wrong={wrong}
					handleDrop={handleDrop}
					droppedBoxTitles={droppedBoxTitles}
				/>
			) : (
				<Complete pics={pics} max={pics.length} score={score} wrong={wrong} />
			)}
		</DndProvider>
	)
}

export default Guess

export const query = graphql`
	query GuessQuery {
		allCharacters {
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
