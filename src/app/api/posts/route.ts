import { postList } from "./postList"

export async function GET(request: Request) {
	return new Response(JSON.stringify(postList), {
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
	})
}
