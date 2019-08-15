import React from 'react'
import {Progress} from 'reactstrap'

const Score = ({pics, max, score, wrong}) => {
	return (
		<div>
			<div className="text-center" style={{paddingTop: '10px'}}>
				{score + wrong} of {max}
			</div>

			<Progress animated multi max={max} style={{height: 40}}>
				<Progress bar animated value={score + wrong} max={max}></Progress>
			</Progress>
		</div>
	)
}
export default Score
