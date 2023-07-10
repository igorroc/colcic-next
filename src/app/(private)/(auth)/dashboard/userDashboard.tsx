"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/Button"
import Loading from "@/components/Loading"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { useUserToken } from "@/utils/handleUserToken"
import { TPost } from "@/types/post"

export default function UserDashboard() {
	const { token } = useUserToken()
	const { user } = useUser({ token })
	const { getMyPosts, getMyPostsWaitingForApproval } = usePosts()
	const [myPosts, setMyPosts] = useState<TPost[]>()
	const [waitingPosts, setWaitingPosts] = useState<TPost[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		async function fetchData() {
			const postsRes = await getMyPosts(token)
			if (postsRes) setMyPosts(postsRes)

			const waitingPostsRes = await getMyPostsWaitingForApproval(token)
			if (waitingPostsRes) setWaitingPosts(waitingPostsRes)

			setLoading(false)
		}
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!user) return <Loading />

	return (
		<div>
			<h1>Dashboard</h1>
			{loading ? (
				<Loading />
			) : (
				<>
					<p>Olá, {user.name}!</p>
					{waitingPosts && waitingPosts.length > 0 && (
						<>
							<h2>⏰ Publicações em Aguardo</h2>
							<p>
								Atualmente você tem{" "}
								{waitingPosts.length > 1
									? `${waitingPosts.length} publicações`
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
