import { TUser } from "./user"

export type TAuthor = TUser

export type TCategory = string | null

export enum PostType {
	SITE = "site",
	MURAL = "mural",
}

export type PostStatus = "ativo" | "pendente" | "deletado"

export type TPost = {
	_id: string
	author: string | TAuthor
	slug: string
	title: string
	body: string
	created_at: string
	status: PostStatus
	category: string[]
	types: string[]
	image: string
	activationDate: string
	expirationDate: string
	createdAt: string
	updatedAt: string
	__v: number
}

export type TPostWithAuthor = TPost

export type TPostToPublish = {
	body: string
	title: string
	slug: string
	description: string
	expirationDate: Date
	categories: string[]
	types: PostType[]
	horizontal_image: string
	vertical_image: string
	author_id: string
}
