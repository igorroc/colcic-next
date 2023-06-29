import { users } from "./userList"

export function getUser() {
	const searchId = 1

	return users.filter((user) => user.id === searchId)[0]
}
