"use client"

import { getCurrentUser } from "@/hooks/users"
import { getToken } from "@/utils/handleToken"
import { redirect } from "next/navigation"
import React from "react"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"

export default function Dashboard() {
	const userToken = getToken()

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)

	if (user.isAdmin) return <AdminDashboard />

	return <UserDashboard />
}
