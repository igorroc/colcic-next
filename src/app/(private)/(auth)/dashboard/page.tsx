"use client"

import React, { useEffect, useState } from "react"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import { redirect } from "next/navigation"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"

export default function Dashboard() {
	const { token } = useUserToken()
	const { user } = useUser(token)
	const [loading, setLoading] = useState(true)
	const [state, setState] = useState("")

	useEffect(() => {
		if (user) {
			if (user.type == "admin") setState("admin")
			else if (user.type == "user") setState("user")
		} else {
			setState("error")
		}
		setLoading(false)
	}, [user])

	if (loading) return <div>Loading...</div>
	if (state == "admin") return <AdminDashboard />
	if (state == "user") return <UserDashboard />
	if (state == "error") {
		return <div>ERRO</div>
	}
}
