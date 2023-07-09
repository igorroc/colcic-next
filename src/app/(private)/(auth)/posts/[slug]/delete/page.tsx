"use client"

import usePosts from "@/hooks/posts"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"
import React, { useEffect, useState } from "react"

import styles from "./delete.module.css"

interface PostDeleteProps {
	params: {
		slug: string
	}
}

export default function PostDelete(props: PostDeleteProps) {
	const { token } = useUserToken()
	const { getPostBySlug, deletePost } = usePosts()

	const [postTitle, setPostTitle] = useState("")
	const [slug, setSlug] = useState("")

	useEffect(() => {
		async function getData() {
			const post = await getPostBySlug(props.params.slug)

			setPostTitle(props.params.slug)
			setSlug(props.params.slug)
			if (!post) return
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.params.slug])

	async function handleDelete() {
		deletePost(slug, token)
		alert("Funcionalidade ainda não implementada")
	}

	return (
		<div>
			<h1>Deletar publicação</h1>

			<>
				<p>
					Você tem certeza que deseja deletar a publicação <strong>{postTitle}</strong>?
				</p>

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