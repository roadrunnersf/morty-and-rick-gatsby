import React from "react"

import { Link, graphql } from "gatsby"

import HomeBox from "./../Components/Home/HomeBox"
import NavBar from "./../Components/Layout/NavBar"

const Home = ({ data }) => {
  console.log(data.allCharacters.nodes)
  return (
    <div>
      <NavBar />
      <HomeBox characters={data.allCharacters.nodes} />
    </div>
  )
}

// filter(photo => photo.name.toLowerCase().includes("rick") && photo.name !== "Morty Jr's interviewer").
export default Home

export const query = graphql`
  query CharactersQuery {
    allCharacters(limit: 5) {
      nodes {
        id
        name
        status
        gender
        image
      }
    }
  }
`
