import { NextResponse } from "next/server"
import { postList } from "../postList"

const homePostsIds = [1, 4, 6]

export async function GET(request: Request) {
	const posts = postList.filter((post) => homePostsIds.includes(post.id))
	return NextResponse.json(posts)
}
