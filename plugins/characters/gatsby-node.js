const axios = require('axios')

exports.sourceNodes = async ({actions, createContentDigest}) => {
	const {createNode} = actions

	const integerList = (start, length) =>
		Array.from({length: length}, (v, k) => k + start)

	const rickMortyURL = `https://rickandmortyapi.com/api/character/${integerList(
		1,
		493
	)}`

	const rickMorty = await axios.get(rickMortyURL)

	rickMorty.data.forEach(character => {
		const nodeContent = JSON.stringify(character)
		const nodeMeta = {
			id: character.id.toString(),
			parent: null,
			children: [],
			internal: {
				type: `Characters`,
				content: nodeContent,
				contentDigest: createContentDigest(character),
			},
		}
		const node = Object.assign({}, character, nodeMeta)
		createNode(node)
	})
}
