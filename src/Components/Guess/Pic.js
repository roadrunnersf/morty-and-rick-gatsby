import React from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './../../utils/ItemTypes'

import {Card, CardImg, CardHeader} from '../cards'

const Pic = ({image, lastDroppedItem, onDrop}) => {
	const [{canDrop, isOver}, drop] = useDrop({
		accept: ItemTypes.TITLE,
		drop: onDrop,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	})
	const isActive = canDrop && isOver
	let opacity
	if (isActive || lastDroppedItem) {
		opacity = 0.6
	} else if (canDrop) {
		opacity = 1
	}

	const cardJSX = (
		<Card>
			<CardImg src={image} style={{opacity}} />

			{lastDroppedItem && <CardHeader>{lastDroppedItem.name}</CardHeader>}

			{isActive && <CardHeader>Release to drop.</CardHeader>}
		</Card>
	)
	const divStyle = {
		display: 'inline-block',
		width: '33.3333%',
		padding: 5,
	}

	return !lastDroppedItem ? (
		<div ref={drop} style={divStyle}>
			{cardJSX}
		</div>
	) : (
		<div style={divStyle}>{cardJSX}</div>
	)
}
export default Pic
