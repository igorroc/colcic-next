"use client"

import React, { useEffect, useState } from "react"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import { useRouter } from "next/navigation"
import AdminDashboard from "./adminDashboard"
import UserDashboard from "./userDashboard"

export default function Dashboard() {
	const { token } = useUserToken()
	const { user, getCurrentUser } = useUser({ token })
	const [loading, setLoading] = useState(true)
	const [state, setState] = useState("")
	const router = useRouter()

	useEffect(() => {
		async function checkUser() {
			const user = await getCurrentUser(token)

			if (!user) {
				setState("Usuário inválido")
				router.push("/logout")
			} else {
				if (user.type == "admin") setState("admin")
				else if (user.type == "user") setState("user")
			}
			setLoading(false)
		}

		checkUser()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	if (loading) return <div>Loading...</div>
	if (state == "admin") return <AdminDashboard />
	if (state == "user") return <UserDashboard />
	if (state == "error") {
		return <div>ERRO</div>
	}
}
