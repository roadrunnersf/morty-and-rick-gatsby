import React from "react"
import { Helmet } from "react-helmet"

import NavBar from "./../Components/Layout/NavBar"

const CharactersViewSingle = ({ data }) => {
  return (
    <div>
      <Helmet>
        <title>{character.name && character.name}</title>
      </Helmet>
      <NavBar />
      <CharactersViewBox character={character} width={300} height={520} />
    </div>
  )
}

export default CharactersViewSingle
