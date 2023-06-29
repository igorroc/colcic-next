import { getCurrentUser } from "@/hooks/users"
import React from "react"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"

export default function Dashboard() {
	const user = getCurrentUser()

	if (user.isAdmin) return <AdminDashboard />

	return <UserDashboard />
}
