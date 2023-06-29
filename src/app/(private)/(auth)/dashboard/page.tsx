"use client"

import { LOCAL_STORAGE_KEY } from "@/constants/storage"
import { getCurrentUser } from "@/hooks/users"
import { redirect } from "next/navigation"
import React from "react"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"

export default function Dashboard() {
	const userToken = window.localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)

	if (user.isAdmin) return <AdminDashboard />

	return <UserDashboard />
}
