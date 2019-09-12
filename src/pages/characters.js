import React from 'react'
import {graphql} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'

import Characters from '../Components/Characters'

const CharactersPage = ({data}) => <Characters data={data} />

export default CharactersPage

export const query = graphql`
	query CharactersQuery {
		allCharacters {
			nodes {
				id
				name
				gender
				species
				status
				image
			}
		}
	}
`
