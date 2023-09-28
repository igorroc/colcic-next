import React from "react"

import { usePosts } from "@/hooks/posts"
import { useUsers } from "@/hooks/users"

import styles from "./dashboard.module.css"
import { Button } from "@/components/Button"
import Loading from "@/components/Loading"
import { useAuth } from "@/components/AuthProvider"

export default function AdminDashboard() {
	const { authUser } = useAuth()
	const { allUsers } = useUsers()
	const { allPosts, postsWaitingForApproval } = usePosts()

	return (
		<div>
			<h1>Dashboard de Admin</h1>
			{authUser && !("error" in authUser) ? (
				<>
					<p>Olá, {authUser.name}!</p>
					<h2>Publicações</h2>
					{postsWaitingForApproval && postsWaitingForApproval.length > 0 ? (
						<div className={styles.card}>
							<b>{postsWaitingForApproval.length}</b>
							<p>Aguardando aprovação</p>
							<Button href={"/approve"} label="Verificar" type="secondary" />
						</div>
					) : (
						<div className={styles.card}>
							<p>Nenhuma publicação aguardando aprovação</p>
						</div>
					)}
					<h2>Dados</h2>
					<div className={styles.row}>
						<div className={styles.card}>
							<span>Usuários</span>
							{allUsers ? <b>{allUsers.length}</b> : <Loading />}
						</div>
						<div className={styles.card}>
							<span>Publicações</span>
							{allPosts ? <b>{allPosts.length}</b> : <Loading />}
						</div>
					</div>
				</>
			) : (
				<p>Erro ao carregar dados do usuário. Por favor, tente novamente mais tarde.</p>
			)}
		</div>
	)
}
