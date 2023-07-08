import { StaticImageData } from "next/image"
import { TUser } from "./user"

export type TAuthor = TUser

export type TCategory = {
	id: string
	name: string
}

export type TPost = {
	id: string
	slug: string
	title: string
	body: string
	description: string
	author_id: string
	created_at: string
	status: "approved" | "pending" | "rejected"
	categories: TCategory[]
	banner: StaticImageData
}

export type TPostWithAuthor = TPost & {
	author: TAuthor
}
