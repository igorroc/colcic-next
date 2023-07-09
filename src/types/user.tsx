import { StaticImageData } from "next/image"

export type TUser = {
	_id: string
	name: string
	email: string
	username: string
	password: string
	accessCode?: string
	type: string
	profilePhoto: string
	createdAt: string
	updatedAt: string
	__v: number
}

export type TUserSimple = {
	name: string
	email: string
	username: string
	password?: string
	type: string
	profilePhoto: string
}
