import { StaticImageData } from "next/image"

export type TUser = {
	id: number
	name: string
	username: string
	password: string
	token: string
	photo: StaticImageData
	isAdmin: boolean
}
