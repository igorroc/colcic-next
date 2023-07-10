import React, { useEffect, useState } from "react"

import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"

import styles from "./dashboard.module.css"
import { Button } from "@/components/Button"
import { TUser } from "@/types/user"
import { TPostWithAuthorObj } from "@/types/post"
import Loading from "@/components/Loading"

export default function AdminDashboard() {
	const { token } = useUserToken()
	const { user, getAllUsers } = useUser({ token })
	const { getPostsWaitingForApproval, getPosts } = usePosts()
	const [postsWaitingForApproval, setPostsWaitingForApproval] = useState<TPostWithAuthorObj[]>()
	const [users, setUsers] = useState<TUser[]>()
	const [posts, setPosts] = useState<TPostWithAuthorObj[]>()

	useEffect(() => {
		async function fetchData() {
			const usersRes = await getAllUsers()
			const waitingPostsRes = await getPostsWaitingForApproval()
			const postsRes = await getPosts(token)

			if (usersRes) setUsers(usersRes)
			if (waitingPostsRes) setPostsWaitingForApproval(waitingPostsRes)
			if (postsRes) setPosts(postsRes)
		}

		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div>
			<h1>Dashboard de Admin</h1>
			{!user ? (
				<Loading />
			) : (
				<>
					<p>Olá, {user.name}!</p>
					<h2>Publicações</h2>
					{postsWaitingForApproval && postsWaitingForApproval.length > 0 ? (
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
							{users ? <b>{users.length}</b> : <Loading />}
						</div>
						<div className={styles.card}>
							<p>Publicações</p>
							{posts ? <b>{posts.length}</b> : <Loading />}
						</div>
					</div>
				</>
			)}
		</div>
	)
}
