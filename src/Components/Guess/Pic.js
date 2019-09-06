import React from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './../../utils/ItemTypes'

import Card from '../elements/cards'

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
			<Card.Img src={image} style={{opacity}} />

			{lastDroppedItem && <Card.Header>{lastDroppedItem.name}</Card.Header>}

			{isActive && <Card.Header>Release to drop.</Card.Header>}
		</Card>
	)
}
export default Pic
