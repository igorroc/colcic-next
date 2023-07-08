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

export enum PostType {
	SITE = "site",
	MURAL = "mural",
}

export type TPostToPublish = {
	body: string
	title: string
	status: string
	activationDate: Date
	expirationDate: Date
	category: string[]
	types: PostType[]
	// bannerHorizontal: string
	// bannerVertical: string
	// author_id: string
	// description: string
}