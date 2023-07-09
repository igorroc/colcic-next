"use client"

import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import React, { useState, useEffect } from "react"

import styles from "./delete.module.css"

interface DeleteUserProps {
	params: {
		id: string
	}
}

export default function DeleteUser({ params }: DeleteUserProps) {
	const { token } = useUserToken()
	const [fullName, setFullName] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(true)
	const { getUserById, deleteUser } = useUser()
	const router = useRouter()

	useEffect(() => {
		async function getData() {
			const user = await getUserById(params.id, token)
			if (user) {
				setFullName(user.name)
			} else {
				setError("Usuário não encontrado")
			}
			setLoading(false)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.id])

	async function handleDelete() {
		const deleted = await deleteUser(params.id, token)

		if (deleted) {
			router.push("/users")
		}
	}

	return (
		<div>
			<h1>Deletar Usuário</h1>

			{loading ? (
				<p>Carregando...</p>
			) : error ? (
				<>
					<p className={styles.error}>{error}</p>
					<Link href={"/users"} className={styles.cancel}>
						Voltar
					</Link>
				</>
			) : (
				<>
					<p>
						Você tem certeza que deseja deletar o usuário <strong>{fullName}</strong>?
					</p>

					<div className={styles.actions}>
						<button onClick={handleDelete} className={styles.delete}>
							Deletar
						</button>
						<Link href={"/users"} className={styles.cancel}>
							Não, voltar
						</Link>
					</div>
				</>
			)}
		</div>
	)
}
