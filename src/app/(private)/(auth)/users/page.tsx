"use client"

import { Button } from "@/components/Button"
import { useUsers } from "@/hooks/users"
import Link from "next/link"
import React from "react"
import { AiFillEdit, AiOutlineStar } from "react-icons/ai"
import { FaTrash } from "react-icons/fa"
import { FiClock } from "react-icons/fi"

import styles from "./users.module.css"

export default function Users() {
	const { allUsers } = useUsers()

	return (
		<div>
			<div className={styles.title}>
				<h1>Usuários</h1>
				<Button label="Novo usuário" href="/users/new" type="primary" />
			</div>
			{
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Tipo</th>
							<th>Nome</th>
							<th>Username</th>
							<th>Email</th>
							<th>Ações</th>
						</tr>
					</thead>
					<tbody>
						{allUsers &&
							allUsers.map((user) => (
								<tr key={user._id}>
									<th className={styles.flexRow}>
										{user.type === "admin" && (
											<AiOutlineStar title="Administrador" />
										)}
										{!user.password && <FiClock title="Novo usuário" />}
									</th>
									<th>{user.name}</th>
									<th>{user.username}</th>
									<th>{user.email}</th>
									<th className={styles.flexRow}>
										{allUsers.length > 1 && (
											<>
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
											</>
										)}
									</th>
								</tr>
							))}
					</tbody>
				</table>
			}
		</div>
	)
}
