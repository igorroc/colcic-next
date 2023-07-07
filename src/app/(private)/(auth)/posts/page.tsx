"use client"

import { useUserToken } from "@/utils/handleUserToken"
import { getPostsByUser } from "@/hooks/posts"
import { getCurrentUser } from "@/hooks/users"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/Button"

import styles from "./posts.module.css"
import Image from "next/image"
import { AiFillEdit } from "react-icons/ai"
import { BsFillEyeFill } from "react-icons/bs"

export default function Posts() {
	const { token } = useUserToken()

	const user = getCurrentUser(token)

	const posts = getPostsByUser(user.id)

	return (
		<div>
			<h1>Minhas Publicações</h1>
			<div className={styles.content}>
				{posts.length > 0 ? (
					<div className={styles.row}>
						{posts.map((post, index) => (
							<div key={index} className={styles.post}>
								<div className={styles.image}>
									<Image src={post.banner} alt={post.title} />
								</div>
								<div className={styles.content}>
									<b className={styles.title}>{post.title}</b>
									<div className={styles.row}>
										<Link
											href={"/posts/" + post.id + "/edit"}
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
