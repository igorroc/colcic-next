"use client"

import { getUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"

export default function Users() {
	const user = getUser()

	if (!user.isAdmin) {
		redirect("/dashboard")
		return null
	}

	return <div>Users</div>
}
