import { getUserToken } from "@/utils/handleUserToken"
import { getCurrentUser } from "@/hooks/users"
import { redirect } from "next/navigation"
import React from "react"

export default function Settings() {
	const userToken = getUserToken()

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)

	return (
		<div>
			<h1>Configurações</h1>
		</div>
	)
}
