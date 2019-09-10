import React from 'react'
import {Link} from 'gatsby'

import {Nav} from '../elements/layout'

const Navigation = () => {
	return (
		<>
			<Nav.Head />
			<Nav.Container>
				<Nav.List>
					<Link to="/">
						<Nav.Item home>Morty & Rick</Nav.Item>
					</Link>
					<Link to="/characters">
						<Nav.Item>Characters</Nav.Item>
					</Link>
					<Link to="/guess">
						<Nav.Item>Guesser</Nav.Item>
					</Link>
				</Nav.List>
			</Nav.Container>
		</>
	)
}

export default Navigation
