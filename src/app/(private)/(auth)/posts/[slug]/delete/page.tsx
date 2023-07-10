"use client"

import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { TUser } from "@/types/user"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

import styles from "./delete.module.css"

interface PostDeleteProps {
	params: {
		slug: string
	}
}

export default function PostDelete(props: PostDeleteProps) {
	const router = useRouter()
	const { token } = useUserToken()
	const { getPostBySlug, deletePost } = usePosts()
	const { getCurrentUser } = useUser()

	const [postTitle, setPostTitle] = useState("")
	const [postAuthor, setPostAuthor] = useState<TUser>()
	const [slug, setSlug] = useState("")
	const [currentUser, setCurrentUser] = useState<TUser>()

	useEffect(() => {
		async function getData() {
			const post = await getPostBySlug(props.params.slug)

			setSlug(props.params.slug)

			if (!post) return
			setPostTitle(post.title)

			if (post.author) setPostAuthor(post.author as TUser)

			const user = await getCurrentUser(token)

			if (user) {
				setCurrentUser(user)
			}
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.params.slug])

	async function handleDelete() {
		const res = await deletePost(slug, token)

		if (res) {
			alert("Publicação deletada com sucesso")
		} else {
			alert("Erro ao deletar publicação")
		}

		router.push("/posts/all")
	}

	return (
		<div>
			<h1>Deletar publicação</h1>

			<>
				{postAuthor?._id == currentUser?._id ? (
					<p>
						Você tem certeza que deseja deletar a publicação{" "}
						<strong>{postTitle}</strong>, criada por você?
					</p>
				) : (
					<p>
						Você tem certeza que deseja deletar a publicação{" "}
						<strong>{postTitle}</strong>, criada por{" "}
						{postAuthor ? (
							<strong>{postAuthor.name}</strong>
						) : (
							<i
								style={{
									textDecoration: "line-through",
								}}
							>
								Usuário deletado
							</i>
						)}
						?
					</p>
				)}

				<div className={styles.actions}>
					<button onClick={handleDelete} className={styles.delete}>
						Deletar
					</button>
					<Link href={"/posts"} className={styles.cancel}>
						Não, voltar
					</Link>
				</div>
			</>
		</div>
	)
}
