import { getUser } from "@/hooks/users"
import React from "react"

export default function UserDashboard() {
	const user = getUser()

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Olá, {user.name}!</p>
			<p>Atualmente você tem X publicações em aguardo</p>
		</div>
	)
}
