import React from 'react'
import { Link } from 'gatsby'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const NavBar = () => (
	<div>
		<Navbar color="dark" dark expand="md">
			<NavbarBrand>
				<Link style={{ color: '#999999' }} to="/">
					{String.raw`<RickAndMorty />`}
				</Link>
			</NavbarBrand>

			<Nav className="ml-auto" navbar>
				<NavItem>
					<Link to="/characters">
						<NavLink>Characters</NavLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link to="/guess">
						<NavLink>Guesser</NavLink>
					</Link>
				</NavItem>
			</Nav>
		</Navbar>
	</div>
)

export default NavBar
