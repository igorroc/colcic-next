"use client"

import { useState, useEffect } from "react"
import { TUser, TUserSimple } from "@/types/user"

interface IUserHook {
	adminOnlyPage?: boolean
	redirectTo?: string
	token?: string
}

export default function useUser(options: IUserHook | undefined = {}) {
	const [user, setUser] = useState<TUser | null>(null)

	useEffect(() => {
		async function getData() {
			const token = options?.token
			const adminPage = options?.adminOnlyPage

			if (token) {
				const user = await getCurrentUser(token)
				setUser(user)
			}

			if (adminPage) {
				adminOnlyPage()
			}
		}

		getData()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	async function getUserById(userId: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + userId)

			if (res.ok) {
				const userRes: TUser = await res.json()

				return userRes
			} else {
				console.error("COLCIC-ERR", "User not found")
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
			const res = await fetch(
				process.env.NEXT_PUBLIC_API_URL + `/users/auth/${userToken}`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${userToken}`,
					},
				} as RequestInit
			)

			if (res.ok) {
				const userRes: TUser = await res.json()

				return userRes
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

	async function isAdmin() {
		return user?.type === "admin"
	}

	function adminOnlyPage() {
		// verifica se o usuário está logado e se é admin
		// se não for, redireciona para a home
		if (user?.type !== "admin") {
			window.location.href = "/"
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

	return {
		getUserById,
		handleUserLogin,
		getCurrentUser,
		getAllUsers,
		createUser,
		editUser,
		deleteUser,
		user,
		isAdmin,
		adminOnlyPage,
	}
}
