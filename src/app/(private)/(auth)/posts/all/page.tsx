"use client"

import React, { useState, useEffect } from "react"
import { useUserToken } from "@/utils/handleUserToken"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import Link from "next/link"
import { Button } from "@/components/Button"

import styles from "./posts.module.css"
import { AiFillCheckCircle, AiFillClockCircle, AiFillCloseCircle, AiFillEdit } from "react-icons/ai"
import { BsCheckCircleFill, BsFillEyeFill, BsFillTrashFill } from "react-icons/bs"
import { TPost } from "@/types/post"
import { TUser } from "@/types/user"
import { useRouter } from "next/navigation"
import Loading from "@/components/Loading"
import { formatToDate } from "@/utils/formatToDate"

export default function Posts() {
	const router = useRouter()
	const { token } = useUserToken()
	const { getCurrentUser } = useUser({ token })
	const { getPostsByUser, getPosts } = usePosts()
	const [posts, setPosts] = useState<TPost[]>([])
	const [user, setUser] = useState<TUser>()

	useEffect(() => {
		async function getData() {
			const user = await getCurrentUser(token)

			if (!user) return

			if (user.type != "admin") {
				router.push("/posts")
				return
			}

			setUser(user)

			const posts = await getPosts(token)

			if (!posts) return

			setPosts(posts.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)))
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!user) return <Loading />
	return (
		<div>
			<div className={styles.rowTitle}>
				<h1>Todas as Publicações</h1>
				{user.type == "admin" && <Button label="Voltar" type="secondary" href={"/posts"} />}
			</div>
			<div className={styles.content}>
				{posts.length > 0 ? (
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Status</th>
								<th>Tipo</th>
								<th>Criação</th>
								<th>Autor</th>
								<th>Titulo</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{posts.map((post) => (
								<tr key={post._id} className={styles.post}>
									<th className={styles.status}>
										{post.status == "ativo" && (
											<AiFillCheckCircle
												size={20}
												title="Ativo"
												color="var(--primary-color)"
											/>
										)}
										{post.status == "pendente" && (
											<AiFillClockCircle
												size={20}
												title="Pendente"
												color="var(--text-color)"
											/>
										)}
										{post.status == "deletado" && (
											<AiFillCloseCircle
												size={20}
												title="Deletado"
												color="var(--cancel-color)"
											/>
										)}
									</th>
									<th>{post.types ? post.types.join(",") : "?"}</th>
									<th>{formatToDate(post.createdAt)}</th>
									<th>
										{post.author && (post.author as TUser).name
											? (post.author as TUser).name
											: "?"}
									</th>
									<th>{post.title}</th>
									<th className={styles.row}>
										{post.status != "deletado" ? (
											<>
												<Link
													href={"/posts/" + post.slug + "/edit"}
													className={styles.button}
												>
													<AiFillEdit />
												</Link>
												<Link
													href={"/noticias/" + post.slug}
													className={styles.button}
												>
													<BsFillEyeFill />
												</Link>
												<Link
													href={"/posts/" + post.slug + "/delete"}
													className={styles.button}
												>
													<BsFillTrashFill />
												</Link>
											</>
										) : (
											<>
												<Link
													href={"/noticias/" + post.slug}
													className={styles.button}
												>
													<BsFillEyeFill />
												</Link>
											</>
										)}
									</th>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<>
						<p>Não existem publicações</p>
					</>
				)}
			</div>
		</div>
	)
}
