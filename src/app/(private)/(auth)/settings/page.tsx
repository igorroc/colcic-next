import { LOCAL_STORAGE_KEY } from "@/constants/storage"
import { getCurrentUser } from "@/hooks/users"
import { redirect } from "next/navigation"
import React from "react"

export default function Settings() {
	const userToken = window.localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)

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
