import { users } from "./userList"

export function getCurrentUser() {
	const searchId = 2

	return users.filter((user) => user.id === searchId)[0]
}

export function getUserById(userId: number) {
	return users.filter((user) => user.id === userId)[0]
}
