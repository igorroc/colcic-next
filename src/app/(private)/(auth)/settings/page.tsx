"use client"

import { useUserToken } from "@/utils/handleUserToken"
import useUser from "@/hooks/users"
import React from "react"

export default function Settings() {
	const { token } = useUserToken()
	const { user } = useUser(token)

	return (
		<div>
			<h1>Configurações</h1>
		</div>
	)
}
