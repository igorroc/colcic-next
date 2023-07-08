import { StaticImageData } from "next/image"
import { TUser } from "./user"

export type TAuthor = TUser

export type TCategory = string | null

export type TPost = {
	_id: string
	author: string
	// slug: string
	title: string
	body: string
	created_at: string
	status: "ativo" | "pending" | "rejected"
	category: string[]
	types: string[]
	image: string
	activationDate: string
	expirationDate: string
	createdAt: string
	updatedAt: string
	__v: number
}

export type TPostWithAuthor = TPost & {
	author_obj: TAuthor
}
