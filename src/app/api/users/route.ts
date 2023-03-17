import { userList } from "./userList"

export async function GET(request: Request) {
	return new Response(JSON.stringify(userList), {
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
	})
}
