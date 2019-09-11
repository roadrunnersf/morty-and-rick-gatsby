import {useState, useEffect} from 'react'
import {arrScore, arrWrong} from '../'

const useScore = pics => {
	const [score, setScore] = useState(0)
	const [wrong, setWrong] = useState(0)

	useEffect(() => {
		setScore(arrScore(pics))
		setWrong(arrWrong(pics))
	}, [pics])

	return [score, wrong]
}

export default useScore
