import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import CharactersViewBox from "./CharactersViewBox"

const CharactersView = ({ characters }) => {
  return (
    <div>
      <Helmet>
        <title>Character Viewer</title>
      </Helmet>
      {characters.map((character, index) => (
        <div
          key={character.id}
          style={{
            display: "inline-block",
            padding: 5,
          }}
        >
          <Link to={`/characters/${character.id}`}>
            <CharactersViewBox
              key={character.id}
              character={character}
              width={250}
              height={450}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CharactersView

// fetchCharacters(randList(493, 493))
//   .then(response =>
//     response.filter(
//       obj => obj.name.includes('Rick') && obj.name.includes('Tiny')
//     )
//   )
//   .then(response => {
//     setCharacters(response)
//   })
