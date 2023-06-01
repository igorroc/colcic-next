import defaultBody from "@/utils/defaultPostBody"
import banner from "/public/banner.png"
import avatar from "/public/people.png"

export const post = {
	id: 1,
	slug: "hello-world",
	title: "Hello, world!",
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
}

export async function getPosts() {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	return [post]
}

export async function getPostByID(id: number) {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	return post
}
