import UserPhoto from "/public/igor.png"
import UserPhoto2 from "/public/bia.png"

const users = [
	{
		id: 1,
		name: "Igor",
		photo: UserPhoto,
		isAdmin: true,
	},
	{
		id: 2,
		name: "Bia",
		photo: UserPhoto2,
		isAdmin: false,
	},
]

export function getUser() {
	const searchId = 1

	return users.filter((user) => user.id === searchId)[0]
}
