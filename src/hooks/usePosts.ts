import defaultBody from "@/utils/defaultPostBody"
import banner from "/public/banner.png"
import avatar from "/public/people.png"

export const posts = [{
	id: 1,
	slug: "metaverso-post",
	title: "Metaverso: a nova fronteira da internet!",
	body: defaultBody,
	description: "This is a description",
	author: {
		id: 1,
		name: "John Doe",
		avatar: avatar,
	},
	created_at: "2021-05-01T00:00:00.000Z",
	categories: [
		{
			id: 1,
			name: "Tecnologia",
		},
		{
			id: 2,
			name: "React",
		},
	],
	banner: banner,
}]

export type PostT = typeof posts[0];

export async function getPosts() {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	return posts
}

export async function getPostBySlug(slug: string) {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	const post = posts.find(post => post.slug === slug);
	return post
}
