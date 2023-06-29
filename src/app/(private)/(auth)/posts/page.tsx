import { getPostsByUser } from "@/hooks/posts"
import { getCurrentUser } from "@/hooks/users"
import Link from "next/link"
import React from "react"

export default function Posts() {
	const user = getCurrentUser()

	const posts = getPostsByUser(user.id)

	return (
		<div>
			<h1>Minhas Publicações</h1>
			{posts.length > 0 ? (
				posts.map((post, index) => (
					<div key={index}>
						<span>{post.title}</span>
					</div>
				))
			) : (
				<>
					<p>Você ainda não possui publicações aprovadas.</p>
					<p>Que tal começar agora mesmo?</p>
					<Link href="/posts/new">Criar publicação</Link>
				</>
			)}
		</div>
	)
}