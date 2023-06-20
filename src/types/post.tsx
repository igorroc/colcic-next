import { StaticImageData } from "next/image"

export type TAuthor = {
	id: number
	name: string
	avatar: StaticImageData
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
	author: TAuthor
	created_at: string
	categories: TCategory[]
	banner: StaticImageData
}
