import { users } from "./userList"
import { postList } from "./postList"
import { TUser, TUserSimple } from "@/types/user"

export function getCurrentUser(userToken: string) {
	return users.filter((user) => user.token === userToken)[0]
}

export async function getUserById(userId: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + userId)

		const usersRes: TUser = await res.json()

		console.log(usersRes)

		return usersRes
	} catch (err) {
		console.error(err)
		return null
	}
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

export async function createUser(user: TUserSimple) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})

		const newUser: TUser = await res.json()

		return newUser
	} catch (err) {
		console.error(err)
		return null
	}
}

export async function editUser(user: TUserSimple, id: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		})

		const newUser: TUser = await res.json()

		return newUser
	} catch (err) {
		console.error(err)
		return null
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
