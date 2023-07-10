"use client"

import { Button } from "@/components/Button"
import Loading from "@/components/Loading"
import useUser from "@/hooks/users"
import { TUser } from "@/types/user"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { AiFillEdit, AiOutlineStar } from "react-icons/ai"
import { FaTrash } from "react-icons/fa"
import { FiClock } from "react-icons/fi"

import styles from "./users.module.css"

export default function Users() {
	const [users, setUsers] = useState<TUser[]>()
	const [isLoading, setIsLoading] = useState(true)
	const [isError, setIsError] = useState(false)
	const { token } = useUserToken()
	const { getAllUsers, getCurrentUser } = useUser({
		token,
		adminOnlyPage: true,
		redirectTo: "/dashboard",
	})
	const [currentUser, setCurrentUser] = useState<TUser>()

	useEffect(() => {
		async function getData() {
			const userRes = await getAllUsers()
			const currentUserRes = await getCurrentUser(token)

			setUsers(userRes)

			if (currentUserRes) setCurrentUser(currentUserRes)

			setIsLoading(false)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isLoading])

	return (
		<div>
			<div className={styles.title}>
				<h1>Usuários</h1>
				<Button label="Novo usuário" href="/users/new" type="primary" />
			</div>
			{isError && <p>Erro ao carregar usuários</p>}
			{isLoading ? (
				<Loading />
			) : (
				!isError && (
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
							{users &&
								users.map((user) => (
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
											{users.length > 1 && (
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
				)
			)}
		</div>
	)
}
