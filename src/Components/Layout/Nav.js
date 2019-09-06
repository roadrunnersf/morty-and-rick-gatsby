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
						<Nav.Item home>Home</Nav.Item>
					</Link>
					<Link to="/characters">
						<Nav.Item>Characters</Nav.Item>
					</Link>
					<Link to="/guess">
						<Nav.Item>Guessing Game</Nav.Item>
					</Link>
				</Nav.List>
			</Nav.Box>
		</>
	)
}

export default Navigation
