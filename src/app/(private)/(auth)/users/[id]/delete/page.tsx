"use client"

import { deleteUser, getUserById } from "@/hooks/users"
import Link from "next/link"
import { redirect } from "next/navigation"
import React, { useState, useEffect } from "react"

import styles from "./delete.module.css"

interface DeleteUserProps {
	params: {
		id: string
	}
}

export default function DeleteUser({ params }: DeleteUserProps) {
	const [fullName, setFullName] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getData() {
			const user = await getUserById(params.id)
			if (user) {
				setFullName(user.name)
			} else {
				setError("Usuário não encontrado")
			}
			setLoading(false)
		}

		getData()
	}, [params.id])

	async function handleDelete() {
		const deleted = await deleteUser(params.id)

		if (deleted) {
			redirect("/users")
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
