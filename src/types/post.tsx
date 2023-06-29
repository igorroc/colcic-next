import { StaticImageData } from "next/image"

export type TAuthor = {
	name: string
	photo: StaticImageData
}

export type TCategory = {
	id: number
	name: string
}

export type TPost = {
	id: number
	slug: string
	title: string
	body: string
	description: string
	author_id: number
	created_at: string
	status: "approved" | "pending" | "rejected"
	categories: TCategory[]
	banner: StaticImageData
}

export type TPostWithAuthor = TPost & {
	author: TAuthor
}
