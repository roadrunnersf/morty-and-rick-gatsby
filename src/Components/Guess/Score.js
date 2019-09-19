import React from 'react'
import {Progress} from '../elements/progress'

const Score = ({max, score, wrong}) => {
	return (
		<Progress height={20}>
			<Progress.Bar value={score + wrong} max={max}></Progress.Bar>
		</Progress>
	)
}
export default Score
