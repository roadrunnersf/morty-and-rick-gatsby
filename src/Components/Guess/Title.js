import React from 'react'
import {useDrag} from 'react-dnd'
import Button from '../elements/buttons'

const Title = ({name, type, isDropped}) => {
	const [{faint}, drag] = useDrag({
		item: {name, type},
		collect: monitor => ({
			faint: monitor.isDragging(),
		}),
	})
	return (
		<>
			{!isDropped && (
				<Button ref={drag} faint={faint}>
					{name}
				</Button>
			)}
		</>
	)
}
export default Title
