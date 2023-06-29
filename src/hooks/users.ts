import { setToken } from "@/utils/handleToken"
import { users } from "./userList"

export function getCurrentUser(userToken: string) {
	return users.filter((user) => user.token === userToken)[0]
}

export function getUserById(userId: number) {
	return users.filter((user) => user.id === userId)[0]
}

export function handleUserLogin(username: string, password: string) {
	const user = users.filter((user) => user.username === username && user.password === password)[0]

	if (user) {
		setToken(user.token)
		return user
	}

	return false
}
