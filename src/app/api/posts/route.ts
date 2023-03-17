import { postList } from "./postList"

export async function GET(request: Request) {
	// retorne a lista de posts em um objeto JSON
	console.log(postList)

	return new Response(JSON.stringify(postList), {
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
	})
}
