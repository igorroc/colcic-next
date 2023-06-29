"use client"

import { getCurrentUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"
import { getToken } from "@/utils/handleToken"

export default function Users() {
	const userToken = getToken()

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)

	if (!user.isAdmin) {
		redirect("/dashboard")
		return null
	}

	return <div>Users</div>
}
