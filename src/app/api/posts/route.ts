import { NextResponse } from "next/server"
import { postList } from "./postList"

export async function GET(request: Request) {
	return NextResponse.json(postList)
}
