"use client"

import React from "react"
import usePosts from "@/hooks/posts"
import { TPostWithAuthorObj } from "@/types/post"

export default function Users() {
	const { getPostsWaitingForApproval } = usePosts()
	// const postsWaitingForApproval = getPostsWaitingForApproval()
	const postsWaitingForApproval = [] as TPostWithAuthorObj[]

	return (
		<div>
			<h1>Aprovar publicações</h1>
			{postsWaitingForApproval.length > 0 ? (
				postsWaitingForApproval.map((post) => (
					<div key={post._id}>
						<span>{post.title}</span>
					</div>
				))
			) : (
				<p>Não existem publicações esperando aprovação.</p>
			)}
		</div>
	)
}
