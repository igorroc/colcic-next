import { TPost } from "@/types/post"
import React from "react"

export default async function Noticias() {
	const api_url = process.env.NEXT_PUBLIC_API_URL
	const url = `${api_url}/posts`

	const response = await fetch(url)
	const posts = await response.json()

	return (
		<div>
			<h1>Lista</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				{posts.map((post: TPost, index: number) => (
					<a href={`/noticias/${post.slug}`} key={index}>
						{post.title}
					</a>
				))}
			</div>
		</div>
	)
}
