import { StaticImageData } from "next/image"
import { NextResponse } from "next/server"

import defaultBody from "@/utils/defaultPostBody"

import banner from "/public/banner.png"
import avatar from "/public/people.png"
import { TPost } from "@/types/post"

const postList: TPost[] = [
	{
		id: 1,
		slug: "metaverso-post",
		title: "Metaverso: a nova fronteira da internet!",
		body: defaultBody,
		description: "This is a description",
		author: {
			id: 1,
			name: "John Doe",
			avatar: avatar,
		},
		created_at: "2021-05-01T00:00:00.000Z",
		categories: [
			{
				id: 1,
				name: "Tecnologia",
			},
			{
				id: 2,
				name: "React",
			},
		],
		banner: banner,
	},
]

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const slug = searchParams.get("slug")

	const post = postList.find((post) => post.slug === slug)

	if (post) {
		return NextResponse.json(post)
	} else {
		return NextResponse.json({ error: "Post not found" }, { status: 404 })
	}
}
