const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templateOfYourCharacterPage = path.resolve(
    "src/templates/CharactersSingle.js"
  )

  const pages = await graphql(`
    query CharacterPages {
      allCharacters(limit: 493) {
        nodes {
          id
          name
          gender
          status
          species
          image
        }
      }
    }
  `)

  let characters = pages.data.allCharacters.nodes

  characters.forEach(node => {
    createPage({
      path: `characters/${node.id}`,
      component: templateOfYourCharacterPage,
      context: {
        id: node.id,
        name: node.name,
        image: node.image,
        species: node.species,
        gender: node.gender,
        status: node.status,
      }, // This is to pass data as props to your component.
    })
  })
}
