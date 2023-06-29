import { users } from "./userList"
import { postList } from "./postList"

export function getCurrentUser(userToken: string) {
	return users.filter((user) => user.token === userToken)[0]
}

export function getUserById(userId: number) {
	return users.filter((user) => user.id === userId)[0]
}

export function handleUserLogin(username: string, password: string) {
	const user = users.filter((user) => user.username === username && user.password === password)[0]

	if (user) {
		return user
	}

	return false
}

export function getTopPublishers() {
	// busca 5 usuários com mais posts e retorna um array com os usuários (nome, photo e quantidade), ordenados por quantidade de posts, do maior para o menor

	const topPublishers = users
		.map((user) => {
			const posts = postList.filter((post) => post.author_id === user.id)

			return {
				id: user.id,
				name: user.name,
				photo: user.photo,
				posts: posts.length,
			}
		})
		.sort((a, b) => b.posts - a.posts)

	return topPublishers.slice(0, 5)
}
