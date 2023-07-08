"use client"

import { useState, useEffect } from "react"
import { users } from "./userList"
import { postList } from "./postList"
import { TUser, TUserSimple } from "@/types/user"

export default function useUser(token: string | null = null) {
	const [user, setUser] = useState<TUser | null>(null)

	useEffect(() => {
		async function getData() {
			if (token) {
				const user = await getCurrentUser(token)
				setUser(user)
			}
		}

		getData()
	}, [token])

	async function getUserById(userId: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + userId)

			if (res.ok) {
				const usersRes: TUser = await res.json()

				return usersRes
			} else {
				return null
			}
		} catch (err) {
			console.error("COLCIC-ERR", err)
			return null
		}
	}

	async function handleUserLogin(username: string, password: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: username, password }),
			})

			if (res.ok) {
				const usersRes = await res.json()

				return {
					token: usersRes.access_token,
				}
			} else {
				return null
			}
		} catch (err) {
			console.error(err)
			return false
		}
	}

	async function getCurrentUser(userToken: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users")

			if (res.ok) {
				const usersRes: TUser[] = await res.json()

				return usersRes[1]
			} else {
				return null
			}
		} catch (err) {
			console.error(err)
			return null
		}
	}

	async function getAllUsers() {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users")

			const usersRes: TUser[] = await res.json()

			return usersRes
		} catch (err) {
			console.error(err)
			return []
		}
	}

	async function createUser(user: TUserSimple) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			})

			if (res.ok) {
				const newUser: TUser = await res.json()

				return newUser
			} else {
				return null
			}
		} catch (err) {
			console.error(err)
			return null
		}
	}

	async function editUser(user: TUserSimple, id: string) {
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

	async function deleteUser(id: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + id, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			})

			const deleted = res.ok

			return deleted
		} catch (err) {
			console.error(err)
			return null
		}
	}

	async function adminOnlyPage() {
		// verifica se o usuário está logado e se é admin
		// se não for, redireciona para a home
		// const user = await getCurrentUser()
	}

	function getTopPublishers() {
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

	return {
		getUserById,
		handleUserLogin,
		getCurrentUser,
		getAllUsers,
		createUser,
		editUser,
		deleteUser,
		user,
		getTopPublishers,
	}
}
