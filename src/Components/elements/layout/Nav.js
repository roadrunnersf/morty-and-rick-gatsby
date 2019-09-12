import {Link as GLink} from 'gatsby'

import styled, {css} from 'styled-components'
import {FONT, COOL_GREY_LIGHT} from '../../../config/styles'

const listStyle = css`
	list-style-type: none;
	text-align: right;
	font-size: 1rem;
	line-height: 1.4rem;
	font-family: ${FONT};
	font-weight: 400;
	color: black;
`

const Head = styled.div`
	position: relative;
	top: 0px;
	right: 0px;
	box-sizing: content-box;
	padding: 0;
	margin: 0px;

	width: calculate(100% + 200px);
	height: 100px;
	margin-bottom: 28px;
	background-color: ${COOL_GREY_LIGHT};
`
const Container = styled.nav`
	position: absolute;
	z-index: 100;
	top: 11px;
	right: 40px;
`
const List = styled.ul`
	${listStyle};
`
const Item = styled.li`
	${listStyle};
	${props => props.home && `font-weight: 600;`}
	:hover {
		font-size: 1.2rem;
		line-height: 1.7rem;
		font-weight: calculate(font-weight * 2);
		transition-property: all;
		transition-duration: 160ms;
		transition-timing-function: ease-in-out;
	}
`
/* background-color: black; */
/* color: ${COOL_GREY_LIGHT}; */
const Link = styled(GLink)`
	text-decoration: none;
	box-shadow: none;
`

const Nav = {}
Nav.Head = Head
Nav.Container = Container
Nav.List = List
Nav.Item = Item
Nav.Link = Link

export {Nav}
