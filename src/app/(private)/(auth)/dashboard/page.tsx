"use client"

import { getCurrentUser } from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import { redirect } from "next/navigation"
import React from "react"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"

export default function Dashboard() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)

	if (user.isAdmin) return <AdminDashboard />

	return <UserDashboard />
}
