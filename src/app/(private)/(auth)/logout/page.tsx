"use client"

import { useAuth } from "@/components/AuthProvider"
import { useUserToken } from "@/utils/handleUserToken"
import { redirect } from "next/navigation"
import React from "react"

export default function Logout() {
	const { resetAuth } = useAuth()
	const { removeUserToken } = useUserToken()

	removeUserToken()
	resetAuth("")

	redirect("/login")

	return (
		<div>
			<h1>Logout</h1>
			<p>Saindo da sua conta...</p>
		</div>
	)
}
