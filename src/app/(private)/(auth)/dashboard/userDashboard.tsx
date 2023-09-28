"use client"

import React from "react"
import { Button } from "@/components/Button"
import Loading from "@/components/Loading"
import { usePosts } from "@/hooks/posts"
import { useAuth } from "@/components/AuthProvider"

export default function UserDashboard() {
	const { authUser } = useAuth();
	const { myPosts, myPostsWaitingForApproval } = usePosts()

	if (!authUser) return <Loading />

	return (
		<div>
			<h1>Dashboard</h1>
			{'error' in authUser ? <h2>Erro</h2> : (
				<>
					<p>Olá, {authUser.name}!</p>
					{myPostsWaitingForApproval && myPostsWaitingForApproval.length > 0 && (
						<>
							<h2>⏰ Publicações em Aguardo</h2>
							<p>
								Atualmente você tem{" "}
								{myPostsWaitingForApproval.length > 1
									? `${myPostsWaitingForApproval.length} publicações`
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
					{myPosts && myPosts.length > 0 ? (
						<>
							<p>
								Atualmente você tem{" "}
								{myPosts.length == 1
									? `1 publicação!`
									: `${myPosts.length} publicações!`}
							</p>
							<p>
								<Button
									label={
										myPosts.length == 1 ? `Ver publicação` : `Ver publicações`
									}
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
				</>
			)}
		</div>
	)
}
