import { getPostsWaitingForApproval } from "@/hooks/posts"
import { getCurrentUser } from "@/hooks/users"
import Link from "next/link"
import React from "react"

export default function AdminDashboard() {
	const user = getCurrentUser()
	const postsWaitingForApproval = getPostsWaitingForApproval()

	return (
		<div>
			<h1>Dashboard de Admin</h1>
			<p>Olá, {user.name}!</p>
			{postsWaitingForApproval.length > 0 && (
				<>
					<p>
						Atualmente existem {postsWaitingForApproval.length} publicações esperando
						aprovação.
					</p>
					<Link href={"/posts/approve"}>Aprovar publicações</Link>
				</>
			)}
		</div>
	)
}
