"use client"

import React, { useState, useEffect } from "react"
import { useUserToken } from "@/utils/handleUserToken"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import Link from "next/link"
import { Button } from "@/components/Button"

import styles from "./posts.module.css"
import { AiFillEdit } from "react-icons/ai"
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs"
import { TPostWithAuthorObj } from "@/types/post"
import { TUser } from "@/types/user"
import { useRouter } from "next/navigation"

export default function Posts() {
	const router = useRouter()
	const { token } = useUserToken()
	const { getCurrentUser } = useUser({ token })
	const { getPostsByUser, getPosts } = usePosts()
	const [posts, setPosts] = useState<TPostWithAuthorObj[]>([])
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

			setPosts(posts)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!user) return <div>Loading...</div>
	return (
		<div>
			<div className={styles.rowTitle}>
				<h1>Todas as Publicações</h1>
				{user.type == "admin" && <Button label="Voltar" type="secondary" href={"/posts"} />}
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
									<div className={styles.author}>
										<div className={styles.authorPhoto}>
											{/* eslint-disable-next-line */}
											<img
												src={post.author.profilePhoto}
												alt={post.author.name}
											/>
										</div>
										<span className={styles.author}>{post.author.name}</span>
									</div>
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
						<p>Não existem publicações</p>
					</>
				)}
			</div>
		</div>
	)
}
