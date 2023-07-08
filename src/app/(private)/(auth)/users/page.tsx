"use client"

import { getAllUsers } from "@/hooks/users"
import { TUser } from "@/types/user"
import React, { useEffect, useState } from "react"

export default async function Users() {
	const [users, setUsers] = useState<TUser[]>()
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		async function getData() {
			const userRes = await getAllUsers()
			setUsers(userRes)
			setIsLoading(false)
		}

		getData()
	}, [])

	return (
		<div>
			<h1>Usuários {isLoading}</h1>
			{isLoading ? <p>Carregando...</p> : <p>Usuários carregados</p>}
			{isError && <p>Erro ao carregar usuários</p>}
		</div>
	)
}
