import React, {useState, useEffect, useCallback} from 'react'
import {graphql} from 'gatsby'
import update from 'immutability-helper'
import {DndProvider} from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.css'

import GuessView from './../../Components/Guess/View'
import Complete from './../../Components/Guess/Complete'

import {
	shuffle,
	randFromList,
	arrScore,
	arrWrong,
	picsComplete,
} from './../../utils'
import ItemTypes from './../../utils/ItemTypes'

const Guess = ({data}) => {
	const [pics, setPics] = useState([1, 1]) //this is needed so that pics can still be used before it is updated in useEffect
	const [titles, setTitles] = useState([])
	const [droppedBoxTitles, setDroppedBoxTitles] = useState([])

	const [score, setScore] = useState(undefined)
	const [wrong, setWrong] = useState(undefined)

	let characters = randFromList(data.allCharacters.nodes, 6)

	const handleDrop = useCallback(
		(index, item) => {
			const {name} = item
			setDroppedBoxTitles(
				update(droppedBoxTitles, name ? {$push: [name]} : {$push: []})
			)
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

	useEffect(() => {
		setPics(
			shuffle(characters).map(obj => ({
				...obj,
				accepts: ItemTypes.TITLE,
				lastDroppedItem: null,
			}))
		)
		setTitles(
			characters
				.slice()
				.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
				.map(obj => ({...obj, type: ItemTypes.TITLE}))
		)
	}, [])

	useEffect(() => {
		// score updates every time there is a change to pics
		pics && setScore(arrScore(pics))
		pics && setWrong(arrWrong(pics))
	}, [pics])

	return (
		<DndProvider backend={HTML5Backend}>
			{picsComplete(pics) ? (
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
