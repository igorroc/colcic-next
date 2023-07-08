import { StaticImageData } from "next/image"
import { TUser } from "./user"

export type TAuthor = TUser

export type TCategory = {
	id: string
	name: string
}

export type TPost = {
	_id: string
	author: string
	// slug: string
	title: string
	body: string
	description: string
	created_at: string
	status: "ativo" | "pending" | "rejected"
	categories: TCategory[]
	banner: StaticImageData
}

export type TPostWithAuthor = TPost & {
	author: TAuthor
}
