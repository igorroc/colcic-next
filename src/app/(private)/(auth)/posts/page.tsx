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
import { TPost, TPostWithAuthorObj } from "@/types/post"
import { TUser } from "@/types/user"
import Loading from "@/components/Loading"

export default function Posts() {
	const { token } = useUserToken()
	const { getCurrentUser } = useUser({ token })
	const { getPostsByUser, getPosts } = usePosts()
	const [posts, setPosts] = useState<TPost[]>([])
	const [user, setUser] = useState<TUser>()

	useEffect(() => {
		async function getData() {
			const user = await getCurrentUser(token)

			if (!user) return

			setUser(user)

			const posts = await getPosts(token)

			if (!posts) return

			const filteredPosts = posts.filter(
				(post) => post.author._id === user._id && post.status == "ativo"
			)

			setPosts(filteredPosts)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!user) return <Loading />
	return (
		<div>
			<div className={styles.rowTitle}>
				<h1>Minhas Publicações</h1>
				{user.type == "admin" && (
					<Button label="Ver todas" type="secondary" href={"/posts/all"} />
				)}
			</div>
			<div className={styles.content}>
				{posts.length > 0 ? (
					<div className={styles.row}>
						{posts.map((post, index) => (
							<div key={index} className={styles.post}>
								<div className={styles.image}>
									{/* eslint-disable-next-line */}
									<img src={post.vertical_image} alt={post.title} />
								</div>
								<div className={styles.content}>
									<b className={styles.title}>{post.title}</b>
									<div className={styles.row}>
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

			<Button href={"/posts/new"} label="Criar publicação" type="primary" />
		</div>
	)
}
