import { LOCAL_STORAGE_KEY } from "@/constants/storage"
import { getPostsWaitingForApproval } from "@/hooks/posts"
import { getCurrentUser } from "@/hooks/users"
import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"

export default function AdminDashboard() {
	const userToken = window.localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)

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
