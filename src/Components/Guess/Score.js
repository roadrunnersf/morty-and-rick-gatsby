import React from 'react'
import {Progress} from 'reactstrap'

const Score = ({pics, max, score, wrong}) => {
	return (
		<Progress animated multi max={max} style={{height: 40}}>
			<Progress bar animated value={score + wrong} max={max}></Progress>
		</Progress>
	)
}
export default Score
