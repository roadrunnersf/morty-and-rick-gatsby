import React from 'react'
import styled, {css} from 'styled-components'
import {FONT, BLUE, BLUE_LIGHTER} from '../../config/styles'

const EASE_IN_OUT = '140ms ease-in-out'

const Button = styled.button`
	font-family: ${FONT};
	box-sizing: border-box;
	appearance: none;
	background-color: ${BLUE};
	border: 1px solid ${BLUE};
	border-radius: 0.4em;
	color: white;
	cursor: pointer;
	display: inline-block;
	align-self: center;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1;
	margin-right: 7px;
	margin-bottom: 7px;
	padding: 0.6em 1.4em;
	text-align: center;
	:focus {
		outline: 0;
	}
	${props =>
		props.animate &&
		`
		:hover{
			background-color: ${BLUE_LIGHTER};
			border-color: ${BLUE_LIGHTER};
			box-shadow: 0 0 40px 40px ${BLUE_LIGHTER} inset;
		}
		transition: box-shadow ${EASE_IN_OUT}, background-color ${EASE_IN_OUT}, border-color ${EASE_IN_OUT};
		`}
`
export default Button
