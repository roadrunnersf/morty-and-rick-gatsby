import styled from 'styled-components'
import {FONT} from '../../../config/styles'

const PARAGRAPH_MARGIN = 8

export const Heading1 = styled.h1`
	font: ${FONT};
	font-size: 72px;
	font-weight: 300;
	margin: 0px 0px ${PARAGRAPH_MARGIN}px;
`
export const Paragraph = styled.p`
	font: ${FONT};
	font-size: 16px;
	font-weight: 400;
	margin: 0px 0px ${PARAGRAPH_MARGIN}px;
`

export const Lead = styled.p`
	font: ${FONT};
	font-size: 20px;
	font-weight: 300;
	margin: 0px 0px ${PARAGRAPH_MARGIN}px;
`
