"use client"

import { getAllUsers } from "@/hooks/users"
import { TUser } from "@/types/user"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiFillEdit, AiFillStar } from "react-icons/ai"
import { FaTrash } from "react-icons/fa"

import styles from "./users.module.css"

export default function Users() {
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
	}, [isLoading])

	return (
		<div>
			<div className={styles.title}>
				<h1>Usuários</h1>
				<Link href="/users/new">Novo usuário</Link>
			</div>
			{isError && <p>Erro ao carregar usuários</p>}
			{isLoading ? (
				<p>Carregando...</p>
			) : (
				!isError && (
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Nome</th>
								<th>Username</th>
								<th>Email</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{users &&
								users.map((user) => (
									<tr key={user._id}>
										<th className={styles.flexRow}>
											{user.type === "admin" && <AiFillStar />}
											<span>{user.name}</span>
										</th>
										<th>{user.username}</th>
										<th>{user.email}</th>
										<th className={styles.flexRow}>
											<Link
												href={`/users/${user._id}`}
												className={styles.actionButton}
												title="Editar usuário"
											>
												<AiFillEdit />
											</Link>
											<Link
												href={`/users/${user._id}/delete`}
												className={styles.actionButton}
												title="Excluir usuário"
											>
												<FaTrash />
											</Link>
										</th>
									</tr>
								))}
						</tbody>
					</table>
				)
			)}
		</div>
	)
}
