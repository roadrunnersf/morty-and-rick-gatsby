import React from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './../../utils/ItemTypes'

import {Card, CardImg, CardHeader} from '../elements/cards'

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

	return (
		<Card ref={!lastDroppedItem ? drop : undefined}>
			<CardImg src={image} style={{opacity}} />

			{lastDroppedItem && <CardHeader>{lastDroppedItem.name}</CardHeader>}

			{isActive && <CardHeader>Release to drop.</CardHeader>}
		</Card>
	)
}
export default Pic
