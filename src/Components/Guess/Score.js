import React from 'react'
import { Progress } from 'reactstrap'

import { arrMatches, arrWrong, arrGuesses } from './../../utils'

const Score = ({ max, scorer }) => {
	const score = arrMatches(scorer)
	const wrong = arrWrong(scorer)
	const guesses = arrGuesses(scorer)
	const complete = max > 0 && guesses === max

	return (
		<div>
			<div className="text-center" style={{ paddingTop: '10px' }}>
				{score} of {max}
			</div>

			<Progress animated multi max={max} style={{ height: 40 }}>
				<Progress bar animated value={guesses} max={max}></Progress>
			</Progress>
		</div>
	)
}
export default Score
