"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { TUser, TUserSimple } from "@/types/user"
import { useUserToken } from "@/utils/handleUserToken"

export const UsersContext = createContext({
	allUsers: [] as TUser[] | null,
	getUserById: (userId: string): Promise<TUser | null> => {
		return new Promise((resolve) => {
			resolve(null)
		})
	},
	handleUserLogin: (
		username: string,
		password: string
	): Promise<
		| {
				token: string
		  }
		| {
				error: string
		  }
	> => {
		return new Promise((resolve) => {
			resolve({ error: "Not implemented" })
		})
	},
})

export function UsersProvider({ children }: { children: ReactNode }) {
	const { token } = useUserToken()

	const [allUsers, setAllUsers] = useState<TUser[] | null>([])

	async function getUserById(userId: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + userId, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})

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

	useEffect(() => {
		if (token) {
			getAllUsers(token).then((users) => setAllUsers(users))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<UsersContext.Provider
			value={{
				allUsers,
				getUserById,
				handleUserLogin,
			}}
		>
			{children}
		</UsersContext.Provider>
	)
}

export function useUsers() {
	return useContext(UsersContext)
}

async function handleUserLogin(username: string, password: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ identifier: username, password }),
		})

		if (res.ok) {
			const usersRes = await res.json()

			return {
				token: usersRes.access_token,
			}
		} else {
			return {
				error: "Usuário ou senha incorretos",
			}
		}
	} catch (err) {
		console.error(err)
		return {
			error: "Erro interno",
		}
	}
}

async function handleFirstAccess(identifier: string, password: string, accessCode: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/first-access", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ identifier, password, accessCode }),
		})

		if (res.ok) {
			const usersRes: TUser = await res.json()

			return usersRes
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
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + `/users/auth/${userToken}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${userToken}`,
			},
		} as RequestInit)

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

async function createUser(user: TUserSimple, token: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(user),
		})

		if (res.ok) {
			const accessToken = await res.json()

			return accessToken
		} else {
			return null
		}
	} catch (err) {
		console.error(err)
		return null
	}
}

async function isAdmin(user: TUser | null) {
	return user?.type === "admin"
}

async function adminOnlyPage(token: string, redirectTo: string = "/") {
	const user = await getCurrentUser(token)

	if (user?.type !== "admin") {
		window.location.href = redirectTo
	}
}

async function editUser(user: TUserSimple, id: string, token: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + id, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(user),
		})

		if (!res.ok) {
			console.error("COLCIC-ERR", "Internal error")
			return null
		}

		const newUser: TUser = await res.json()

		return newUser
	} catch (err) {
		console.error(err)
		return null
	}
}

async function deleteUser(id: string, token: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users/" + id, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})

		const deleted = res.ok

		return deleted
	} catch (err) {
		console.error(err)
		return null
	}
}

async function getAllUsers(token: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})

		const usersRes: TUser[] = await res.json()

		if (usersRes) {
			return usersRes
		} else {
			return []
		}
	} catch (err) {
		console.error(err)
		return null
	}
}
