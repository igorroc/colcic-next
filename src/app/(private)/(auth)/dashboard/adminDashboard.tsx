import { getUser } from "@/hooks/users"
import React from "react"

export default function AdminDashboard() {
	const user = getUser()

	return (
		<div>
			<h1>Dashboard de Admin</h1>
			<p>Olá, {user.name}!</p>
		</div>
	)
}
