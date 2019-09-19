import React from 'react'
import {useDrag} from 'react-dnd'
import {ButtonPopover} from '../elements/buttons'

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
				<ButtonPopover
					ref={drag}
					faint={faint}
					popText={'Drag me onto a picture!'}
					pos={'left'}>
					{name}
				</ButtonPopover>
			)}
		</>
	)
}
export default Title
