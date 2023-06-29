import React from "react"
import Link from "next/link"

import { getPostsWaitingForApproval } from "@/hooks/posts"
import { getCurrentUser, getTopPublishers } from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"

import styles from "./dashboard.module.css"
import { Button } from "@/components/Button"
import Image from "next/image"

export default function AdminDashboard() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)
	const postsWaitingForApproval = getPostsWaitingForApproval()

	const topPublishers = getTopPublishers()

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
			<h2>Top publicadores</h2>
			<div className={styles.row}>
				{topPublishers.map((publisher) => (
					<div className={styles.card} key={publisher.id}>
						<div className={styles.userPhoto}>
							<Image src={publisher.photo} alt={publisher.name} />
						</div>
						<span className={styles.userName}>{publisher.name}</span>
						<span>
							{publisher.posts > 1
								? `${publisher.posts} posts`
								: `${publisher.posts} post`}
						</span>
						{/* <Link href={`/users/${publisher.id}`}>Ver perfil</Link> */}
					</div>
				))}
			</div>
		</div>
	)
}
