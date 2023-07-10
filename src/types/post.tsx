export type TAuthor = {
	_id: string
	name: string
	profilePhoto: string
}

export type TCategory = string | null

export enum PostType {
	SITE = "site",
	MURAL = "mural",
}

export type PostStatus = "ativo" | "pendente" | "deletado"

export type TPost = {
	_id: string
	body: string
	description: string
	slug: string
	title: string
	status: PostStatus
	categories: string[]
	types: PostType[]
	expirationDate: string
	horizontal_image: string
	vertical_image: string
	createdAt: string
	updatedAt: string
	__v: number
}

export type TPostWithAuthorObj = TPost & {
	author: TAuthor
}

export type TPostWithAuthorId = TPost & {
	author: string
}

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
