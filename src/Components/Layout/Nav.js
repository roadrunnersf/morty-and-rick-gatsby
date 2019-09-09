import React from 'react'
import {Link} from 'gatsby'

import Nav from '../elements/nav'

const Navigation = () => {
	return (
		<>
			<Nav.Head />
			<Nav.Box>
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
			</Nav.Box>
		</>
	)
}

export default Navigation
