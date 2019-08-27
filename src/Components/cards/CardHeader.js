import styled from 'styled-components'
import {FONT} from '../../config/styles'

const CardHeader = styled.h6`
	font-family: ${FONT};
	width: 100%;
	font-weight: 400;
	text-align: center;
	padding: 6px 6px;
	margin: 0px;
	background-color: rgba(0, 0, 0, 0.03);
	border-bottom: 1px solid rgba(0, 0, 0, 0.125);
	${props => props.strong && `font-weight: 500;`}
`
export default CardHeader
