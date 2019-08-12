import React from 'react'
import { navigate } from 'gatsby'
import { Progress } from 'reactstrap'

import { arrMatches, arrWrong, arrGuesses } from './../../utils'

const Score = ({ max, scorer }) => {
	const score = arrMatches(scorer)
	const wrong = arrWrong(scorer)
	const guesses = arrGuesses(scorer)
	const complete = max > 0 && guesses === max
	complete && navigate('/guess/complete')

	return (
		<div>
			<div className="text-center">
				{score} of {max}
			</div>

			<Progress animated multi max={max} style={{ height: 40 }}>
				{complete ? (
					<>
						<Progress
							bar
							animated
							color="success"
							value={score}
							max={max}
						></Progress>

						<Progress
							bar
							animated
							color="danger"
							value={wrong}
							max={max}
						></Progress>
					</>
				) : (
					<Progress bar animated value={guesses} max={max}></Progress>
				)}
			</Progress>
		</div>
	)
}
export default Score
