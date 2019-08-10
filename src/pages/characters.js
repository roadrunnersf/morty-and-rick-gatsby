import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"

import CharactersView from "./../Components/Characters/CharactersView"
import NavBar from "./../Components/Layout/NavBar"

import { randFromList } from "./../utils/index"

const Characters = ({ data }) => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setCharacters(randFromList(data.allCharacters.nodes, 20))
  }, [])

  return (
    <div>
      <NavBar />

      <CharactersView characters={characters} />
    </div>
  )
}

export default Characters

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
