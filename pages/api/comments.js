/***************************************************************
 * Any file inside the dir pages/api is mapped to /api/* and    *
 * will be treated as an API endpoint; not a page               *
 ***************************************************************/

import { GraphQLClient, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphCMSToken = process.env.GRAPHCMS_TOKEN

export default async function comments(req, res) {
	console.log(graphCMSToken)

	const graphQLClient = new GraphQLClient(graphqlAPI, {
		headers: {
			authorization: `Bearer ${graphCMSToken}`,
		},
	})

	const query = gql`
		mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
			createComment(data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) {
				id
			}
		}
	`
	try {
		const result = await graphQLClient.request(query, req.body)
		return res.status(200).send(result)
	} catch (error) {
		console.log(error)
		return res.status(500).send(error)
	}
}

export const getComments = async (slug) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				name
				createdAt
				comment
			}
		}
	`
	const result = await request(graphqlAPI, query, { slug })

	return result.comments
}
