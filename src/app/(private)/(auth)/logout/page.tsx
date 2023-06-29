"use client"

import { getCurrentUser } from "@/hooks/users"
import { getUserToken, removeUserToken } from "@/utils/handleUserToken"
import { redirect } from "next/navigation"
import React from "react"

export default function Logout() {
	removeUserToken()

	redirect("/login")

	return (
		<div>
			<h1>Logout</h1>
			<p>Saindo da sua conta...</p>
		</div>
	)
}
