"use client"

import { getPostsByUser, getPostsWaitingForApprovalFromUser } from "@/hooks/posts"
import { getCurrentUser } from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import { redirect } from "next/navigation"
import React from "react"

export default function UserDashboard() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)
	const posts = getPostsByUser(user.id)
	const postsEmAguardo = getPostsWaitingForApprovalFromUser(user.id)

	return (
		<div>
			<h1>Dashboard</h1>
			<p>Olá, {user.name}!</p>
			{postsEmAguardo.length > 0 && <h2>⏰ Publicações em Aguardo</h2>}
			{postsEmAguardo.length > 1 && (
				<>
					<p>Atualmente você tem {postsEmAguardo.length} publicações em aguardo</p>
					<p>
						Basta esperar que os administradores aprovem e sua publicação estará
						disponível!
					</p>
				</>
			)}
			{postsEmAguardo.length == 1 && (
				<>
					<p>Atualmente você tem {postsEmAguardo.length} publicação em aguardo</p>
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
						<Link href="/posts">Ver publicações</Link>
					</p>
				</>
			) : (
				<>
					<p>Você ainda não tem nenhuma publicação aprovada</p>
					<p>Que tal começar agora mesmo?</p>
					<Link href="/posts/new">Criar publicação</Link>
				</>
			)}
		</div>
	)
}
