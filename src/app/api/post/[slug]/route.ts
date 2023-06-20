import { NextResponse } from "next/server"
import { postList } from "../../posts/postList"

type TParams = {
	params: {
		slug: string
	}
}

export async function GET(request: Request, { params }: TParams) {
	const slug = params.slug

	const post = postList.find((post) => post.slug === slug)

	if (post) {
		return NextResponse.json(post)
	} else {
		return NextResponse.json({ error: "Post not found" }, { status: 404 })
	}
}
