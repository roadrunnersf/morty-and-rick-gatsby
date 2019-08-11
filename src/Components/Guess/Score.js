import React from 'react'
import { arrMatches, arrWrong, arrGuesses } from './../../utils'
import { Progress } from 'reactstrap'

const Score = ({ max, scorer }) => {
	const score = arrMatches(scorer)
	const wrong = arrWrong(scorer)
	const complete = arrGuesses(scorer) === max
	console.log('complete: ', complete)

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
					<Progress
						bar
						animated
						value={arrGuesses(scorer)}
						max={max}
					></Progress>
				)}
			</Progress>
		</div>
	)
}
export default Score
