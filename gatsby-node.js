const path = require('path')

exports.createPages = async ({graphql, actions}) => {
	const {createPage} = actions
	const CharactersSingle = path.resolve('src/templates/CharactersSingle.js')

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

	const characters = pages.data.allCharacters.nodes

	for (let i = 0; i < characters.length; i++) {
		const before = i === 0 ? characters.length - 1 : i - 1
		const after = i === characters.length - 1 ? 0 : i + 1

		createPage({
			path: `characters/${characters[i].id}`,
			component: CharactersSingle,
			context: {
				characters: [characters[before], characters[i], characters[after]],
				id: characters[i].id,
				name: characters[i].name,
				image: characters[i].image,
				species: characters[i].species,
				gender: characters[i].gender,
				status: characters[i].status,
			}, // This is to pass data as props to the component.
		})
	}

	// characters.forEach(node => {
	// 	createPage({
	// 		path: `characters/${node.id}`,
	// 		component: CharactersSingle,
	// 		context: {
	// 			id: node.id,
	// 			name: node.name,
	// 			image: node.image,
	// 			species: node.species,
	// 			gender: node.gender,
	// 			status: node.status,
	// 		}, // This is to pass data as props to the component.
	// 	})
	// })
}
