import styled from 'styled-components'
import {BORDER_RADIUS, FONT, GREEN, RED} from '../../../config/styles'

//border-radius: 5px;

const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	width: 100%;
	margin: 9px;
	border-radius: 25px;

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

const Img = styled.img`
	width: 100%;
	border-radius: 25px 25px 0 0;

	&:last-child {
		border-bottom-left-radius: ${BORDER_RADIUS};
		border-bottom-right-radius: ${BORDER_RADIUS};

		${props =>
			props.noRadius &&
			`
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;`}
	}
`
// ^^^ noRadius prop is to override cases where CardImg is inside a Link tag and so gets bottom radius where is shouldn't

const Header = styled.h6`
	font-family: ${FONT};
	font-weight: ${props => (props.strong ? 500 : 400)};
	font-size: 1em;
	text-align: center;
	width: 100%;
	padding: 14px 6px;
	margin: 0px;
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
	&:last-child {
		border-bottom-left-radius: ${BORDER_RADIUS};
		border-bottom-right-radius: ${BORDER_RADIUS};
	}
`

const Body = styled.div`
	padding: 9px;
`

const Text = styled.p`
	font-family: ${FONT};
	width: 100%;
	font-weight: 400;
	font-size: 0.9em;
	text-align: left;
	padding: 0px;
	margin-bottom: 0.55em;
`

Card.Img = Img
Card.Header = Header
Card.Body = Body
Card.Text = Text

export default Card
