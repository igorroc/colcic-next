"use client"

import React, { useState, useEffect } from "react"
import { useUserToken } from "@/utils/handleUserToken"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import Link from "next/link"
import { Button } from "@/components/Button"

import styles from "./posts.module.css"
import Image from "next/image"
import { AiFillEdit } from "react-icons/ai"
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs"
import { TPost } from "@/types/post"
import { TUser } from "@/types/user"
import Loading from "@/components/Loading"
import { formatToDate } from "@/utils/formatToDate"

export default function Posts() {
	const { token } = useUserToken()
	const { getCurrentUser } = useUser({ token })
	const { getMyPosts, getPosts } = usePosts()
	const [posts, setPosts] = useState<TPost[]>([])
	const [user, setUser] = useState<TUser>()
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		async function getData() {
			const user = await getCurrentUser(token)

			if (user) {
				setUser(user)

				const posts = await getMyPosts(token)

				if (posts) {
					setPosts(posts.reverse())
					console.log(posts)
				}
			}

			setLoading(false)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!user) return <Loading />
	return (
		<div className={styles.wrapper}>
			<div className={styles.rowTitle}>
				<h1>Minhas Publicações</h1>
				{user.type == "admin" && (
					<Button label="Ver todas" type="secondary" href={"/posts/all"} />
				)}
			</div>
			<div className={styles.content}>
				{loading ? (
					<Loading />
				) : posts.length > 0 ? (
					<div className={styles.postList}>
						{posts.map((post, index) => (
							<div key={index} className={styles.post}>
								<div className={styles.image}>
									{/* eslint-disable-next-line */}
									<img src={post.horizontal_image} alt={post.title} />
								</div>
								<div className={styles.content}>
									<span>{formatToDate(post.createdAt)}</span>
									<b className={styles.title}>{post.title}</b>
									<div className={styles.row}>
										<Link
											href={"/posts/" + post.slug + "/edit"}
											className={styles.button}
										>
											<AiFillEdit size={16} />
										</Link>
										<Link
											href={"/noticias/" + post.slug}
											className={styles.button}
										>
											<BsFillEyeFill size={16} />
										</Link>
										<Link
											href={"/posts/" + post.slug + "/delete"}
											className={styles.button}
										>
											<BsFillTrashFill size={16} />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<>
						<p>Você ainda não possui publicações aprovadas.</p>
						<p>Que tal começar agora mesmo?</p>
					</>
				)}
			</div>

			<Button href={"/posts/new"} label="Criar publicação" type="primary" className={styles.createNew} />
		</div>
	)
}
