"use client"

import React, { useEffect, useState } from "react"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import { useRouter } from "next/navigation"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"
import Loading from "@/components/Loading"
import { useAuth } from "@/components/AuthProvider"

export default function Dashboard() {
	const { authUser } = useAuth();

	const [loading, setLoading] = useState(true)
	const [state, setState] = useState("" as "admin" | "user" | "error")
	const router = useRouter()

	useEffect(() => {
		async function checkUser() {
			if (authUser) {
				if ('error' in authUser) {
					setState("error")
					router.push("/logout")
					return
				}
				if (authUser.type == "admin") setState("admin")
				else if (authUser.type == "user") setState("user")

			}
			setLoading(false)
		}

		checkUser()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [authUser])

	if (loading) return <Loading />
	else if (state == "admin") return <AdminDashboard />
	else if (state == "user") return <UserDashboard />

}
