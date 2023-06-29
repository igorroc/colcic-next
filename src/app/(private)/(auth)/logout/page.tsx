"use client"

import { getCurrentUser } from "@/hooks/users"
import { getToken } from "@/utils/handleToken"
import { redirect } from "next/navigation"
import React from "react"

export default function Logout() {
	const userToken = getToken()

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)

	return (
		<div>
			<h1>Logout</h1>
			<p>Saindo da sua conta...</p>
		</div>
	)
}
