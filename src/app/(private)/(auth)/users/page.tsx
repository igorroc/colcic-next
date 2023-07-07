"use client"

import { getAllUsers, getCurrentUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"
import { useUserToken } from "@/utils/handleUserToken"

export default async function Users() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)

	if (!user.isAdmin) {
		redirect("/dashboard")
	}

	const users = await getAllUsers()

	return (
		<div>
			<h1>Usuários</h1>
			{users.length > 0 ? (
				users.map((user) => (
					<div key={user.id}>
						<span>{user.name}</span>
					</div>
				))
			) : (
				<p>Não existem usuários.</p>
			)}
		</div>
	)
}
