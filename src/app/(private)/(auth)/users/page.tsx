"use client"

import { getCurrentUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"
import { useUserToken } from "@/utils/handleUserToken"

export default function Users() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)

	if (!user.isAdmin) {
		redirect("/dashboard")
		return null
	}

	return <div>Users</div>
}
