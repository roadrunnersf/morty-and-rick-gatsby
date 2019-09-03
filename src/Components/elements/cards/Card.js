import styled from 'styled-components'
import {FONT, GREEN, RED} from '../../../config/styles'

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	width: 100%;
	margin: 9px;
	border-radius: 5px;

	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	transition: all 200ms ease-in-out;
	${props =>
		props.success &&
		`
		background-color: ${GREEN};
		color: white;
		`};
	${props =>
		props.danger &&
		`
		background-color: ${RED};
		color: white;
		`};
`

export const CardImg = styled.img`
	width: 100%;
	border-radius: calc(0.25rem - 1px);
`

export const CardHeader = styled.h6`
	font-family: ${FONT};
	font-weight: ${props => (props.strong ? 500 : 400)};
	font-size: 1em;
	text-align: center;
	width: 100%;
	padding: 14px 6px;
	margin: 0px;
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
`

export const CardBody = styled.div`
	padding: 9px;
`

export const CardText = styled.p`
	font-family: ${FONT};
	width: 100%;
	font-weight: 400;
	font-size: 0.9em;
	text-align: left;
	padding: 0px;
	margin-bottom: 0.55em;
`
