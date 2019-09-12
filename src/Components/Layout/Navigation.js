import React from 'react'
import {Link} from 'gatsby'

import {Nav} from '../elements/layout'

const Navigation = () => {
	return (
		<>
			<Nav.Head />
			<Nav.Container>
				<Nav.List>
					<Nav.Link to="/">
						<Nav.Item home>Morty & Rick</Nav.Item>
					</Nav.Link>
					<Nav.Link to="/characters">
						<Nav.Item>Characters</Nav.Item>
					</Nav.Link>
					<Nav.Link to="/guess">
						<Nav.Item>Guesser</Nav.Item>
					</Nav.Link>
				</Nav.List>
			</Nav.Container>
		</>
	)
}

export default Navigation
