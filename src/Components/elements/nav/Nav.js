import styled from 'styled-components'
import {FONT, COOL_GREY_LIGHT} from '../../../config/styles'

const Head = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	background-color: ${COOL_GREY_LIGHT};
`
const Box = styled.nav`
	position: fixed;
	z-index: 100;
	top: 16px;
	right: 40px;
	font: ${FONT};
`
const List = styled.ul`
	list-style-type: none;
	text-align: right;
	font-weight: 400;
`

const Item = styled.li`
	font-size: 1rem;
	line-height: 1.4rem;
	${props => props.home && `font-weight: 600;`}
	color: black;
`

const Nav = {}
Nav.Head = Head
Nav.Box = Box
Nav.List = List
Nav.Item = Item

export default Nav
