import { users } from "./userList"
import { postList } from "./postList"
import { TUser } from "@/types/user"

export function getCurrentUser(userToken: string) {
	return users.filter((user) => user.token === userToken)[0]
}

export function getUserById(userId: string) {
	return users.filter((user) => user._id === userId)[0]
}

export function handleUserLogin(username: string, password: string) {
	const user = users.filter((user) => user.username === username && user.password === password)[0]

	if (user) {
		return user
	}

	return false
}

export async function getAllUsers() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users")

		const usersRes: TUser[] = await res.json()

		return usersRes
	} catch (err) {
		console.error(err)
		return []
	}
}

export function getTopPublishers() {
	// busca 5 usuários com mais posts e retorna um array com os usuários (nome, photo e quantidade), ordenados por quantidade de posts, do maior para o menor

	const topPublishers = users
		.map((user) => {
			const posts = postList.filter((post) => post.author_id === user._id)

			return {
				id: user._id,
				name: user.name,
				photo: user.profilePhoto,
				posts: posts.length,
			}
		})
		.sort((a, b) => b.posts - a.posts)

	return topPublishers.slice(0, 5)
}
