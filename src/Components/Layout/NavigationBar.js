import React from 'react'
import {Link} from 'gatsby'
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'

const NavigationBar = () => (
	<Navbar style={{marginBottom: '8px'}} color="dark" dark expand="xs">
		<NavbarBrand tag="div">
			<Link style={{color: '#999999'}} to="/">
				{String.raw`<RickAndMorty />`}
			</Link>
		</NavbarBrand>

		<Nav className="ml-auto" navbar>
			<NavItem>
				<Link to="/characters">
					<NavLink style={{padding: '6px 20px'}} tag="div">
						Characters
					</NavLink>
				</Link>
			</NavItem>
			<NavItem>
				<Link to="/guess">
					<NavLink style={{padding: '6px 20px'}} tag="div">
						Guessing Game
					</NavLink>
				</Link>
			</NavItem>
		</Nav>
	</Navbar>
)

export default NavigationBar
