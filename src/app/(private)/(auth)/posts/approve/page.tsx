"use client"

import { getCurrentUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"
import { getPostsWaitingForApproval } from "@/hooks/posts"
import Image from "next/image"
import { useUserToken } from "@/utils/handleUserToken"

export default function Users() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)

	if (!user.isAdmin) {
		redirect("/dashboard")
	}
	const postsWaitingForApproval = getPostsWaitingForApproval()

	return (
		<div>
			<h1>Aprovar publicações</h1>
			{postsWaitingForApproval.length > 0 ? (
				postsWaitingForApproval.map((post) => (
					<div key={post.id}>
						{/* <div>
							<Image src={post.banner} alt={post.title} />
						</div> */}
						<span>{post.title}</span>
					</div>
				))
			) : (
				<p>Não existem publicações esperando aprovação.</p>
			)}
		</div>
	)
}
