import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import HomeBox from "./../Components/Home/HomeBox"
import NavBar from "./../Components/Layout/NavBar"

const Home = ({ data }) => {
  console.log(data.allCharacters.nodes)
  return (
    <div>
      <Helmet>
        <title>Sam's Rick & Morty App</title>
      </Helmet>

      <NavBar />
      <HomeBox characters={data.allCharacters.nodes} />
    </div>
  )
}

// filter(photo => photo.name.toLowerCase().includes("rick") && photo.name !== "Morty Jr's interviewer").
export default Home

export const query = graphql`
  query HomeCharactersQuery {
    allCharacters(limit: 5) {
      nodes {
        id
        name
        gender
        status
        image
      }
    }
  }
`
