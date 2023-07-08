import React from "react"

import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"

import styles from "./dashboard.module.css"
import { Button } from "@/components/Button"
import Image from "next/image"

export default function AdminDashboard() {
	const { token } = useUserToken()
	const { user } = useUser({ token })
	const { getPostsWaitingForApproval } = usePosts()
	const postsWaitingForApproval = getPostsWaitingForApproval()

	if (!user) return <div>Loading...</div>

	return (
		<div>
			<h1>Dashboard de Admin</h1>
			<p>Olá, {user.name}!</p>
			<h2>Publicações</h2>
			{postsWaitingForApproval.length > 0 ? (
				<div className={styles.card}>
					<b>{postsWaitingForApproval.length}</b>
					<p>Aguardando aprovação</p>
					<Button href={"/posts/approve"} label="Verificar" type="secondary" />
				</div>
			) : (
				<div className={styles.card}>
					<p>Nenhuma publicação aguardando aprovação</p>
				</div>
			)}
			<h2>Dados</h2>
			<div className={styles.row}>
				<div className={styles.card}>
					<p>Usuários</p>
					<b>0</b>
				</div>
				<div className={styles.card}>
					<p>Publicações</p>
					<b>0</b>
				</div>
			</div>
		</div>
	)
}
