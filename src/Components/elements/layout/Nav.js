import styled, {css} from 'styled-components'
import {FONT, COOL_GREY_LIGHT} from '../../../config/styles'

const listStyle = css`
	list-style-type: none;
	text-align: right;
	font-size: 1rem;
	line-height: 1.4rem;
	font: ${FONT};
	font-weight: 400;
	color: black;
`

const Head = styled.div`
	position: relative;
	width: 100%;
	height: 100px;
	margin-bottom: 28px;
	background-color: ${COOL_GREY_LIGHT};
`
const Container = styled.nav`
	position: absolute;
	z-index: 100;
	top: 16px;
	right: 40px;
	${listStyle};
`
const List = styled.ul`
	${listStyle};
`
const Item = styled.li`
	${listStyle};
	${props => props.home && `font-weight: 600;`}
`

const Nav = {}
Nav.Head = Head
Nav.Container = Container
Nav.List = List
Nav.Item = Item

export {Nav}
