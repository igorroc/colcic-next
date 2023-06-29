"use client"

import { getCurrentUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"

export default function Users() {
	const user = getCurrentUser()

	if (!user.isAdmin) {
		redirect("/dashboard")
		return null
	}

	return <div>Users</div>
}
