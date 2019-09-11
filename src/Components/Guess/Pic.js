import React from 'react'
import {useDrop} from 'react-dnd'
import ItemTypes from './../../utils/ItemTypes'

import {Card} from '../elements/cards'

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
	const faint = Boolean(isActive || lastDroppedItem)

	return (
		<Card ref={!lastDroppedItem ? drop : undefined}>
			<Card.Img faint={faint} src={image} />

			{lastDroppedItem && <Card.Header>{lastDroppedItem.name}</Card.Header>}

			{isActive && <Card.Header>Release to drop.</Card.Header>}
		</Card>
	)
}
export default Pic
