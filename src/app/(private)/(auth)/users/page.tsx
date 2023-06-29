"use client"

import { getCurrentUser } from "@/hooks/users"
import React from "react"
import { redirect } from "next/navigation"
import { LOCAL_STORAGE_KEY } from "@/constants/storage"

export default function Users() {
	const userToken = window.localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)

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
