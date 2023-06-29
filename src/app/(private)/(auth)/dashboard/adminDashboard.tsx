import { getPostsWaitingForApproval } from "@/hooks/posts"
import { getCurrentUser } from "@/hooks/users"
import { getUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"

export default function AdminDashboard() {
	const userToken = getUserToken()

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)
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
