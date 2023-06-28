import UserPhoto from "/public/igor.png"

export function getUser() {
	return {
		name: "Igor",
		photo: UserPhoto,
		isAdmin: true,
	}
}
