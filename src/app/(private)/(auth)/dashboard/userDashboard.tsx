"use client"

import { Button } from "@/components/Button"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import React from "react"

export default function UserDashboard() {
	const { token } = useUserToken()
	const { user } = useUser({ token })
	const { getPostsByUser, getPostsWaitingForApprovalFromUser } = usePosts()

	if (!user) return <div>Loading...</div>

	const posts = getPostsByUser(user._id)
	const postsEmAguardo = getPostsWaitingForApprovalFromUser(user._id)

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Olá, {user.name}!</p>
			{postsEmAguardo.length > 0 && (
				<>
					<h2>⏰ Publicações em Aguardo</h2>
					<p>
						Atualmente você tem{" "}
						{postsEmAguardo.length > 1
							? `${postsEmAguardo.length} publicações`
							: "1 publicação"}{" "}
						em aguardo
					</p>
					<p>
						Basta esperar que os administradores aprovem e sua publicação estará
						disponível!
					</p>
				</>
			)}
			<h2>📰 Minhas publicações</h2>
			{posts.length > 0 ? (
				<>
					<p>
						Atualmente você tem{" "}
						{posts.length == 1 ? `1 publicação!` : `${posts.length} publicações!`}
					</p>
					<p>
						<Button
							label={posts.length == 1 ? `Ver publicação` : `Ver publicações`}
							type="primary"
							href="/posts"
						/>
					</p>
				</>
			) : (
				<>
					<p>Você ainda não tem nenhuma publicação aprovada</p>
					<p>Que tal começar agora mesmo?</p>
					<Button label="Criar publicação" type="primary" href="/posts/new" />
				</>
			)}
		</div>
	)
}
