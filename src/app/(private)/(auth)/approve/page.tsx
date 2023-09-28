"use client"

import React, { useState, useEffect } from "react"
import { useUserToken } from "@/utils/handleUserToken"
import { usePosts } from "@/hooks/posts"
import { useUsers } from "@/hooks/users"
import Link from "next/link"
import { Button } from "@/components/Button"

import styles from "./posts.module.css"
import { BsFillEyeFill, BsFillTrashFill } from "react-icons/bs"
import { TPost } from "@/types/post"
import { TUser } from "@/types/user"
import { useRouter } from "next/navigation"
import Loading from "@/components/Loading"
import { formatToDate } from "@/utils/formatToDate"
import { useAuth } from "@/components/AuthProvider"
import { toast } from "react-hot-toast"

export default function Posts() {
	const { authUser } = useAuth()
	const router = useRouter()
	const { postsWaitingForApproval } = usePosts()

	useEffect(() => {
		if (authUser && "type" in authUser && authUser.type != "admin") {
			toast.error("Você não tem permissão para acessar essa página")
			router.push("/posts")
			return
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!authUser) return <Loading />
	return (
		<div>
			<h1>Aprovar publicações</h1>
			<div className={styles.content}>
				{postsWaitingForApproval.length > 0 ? (
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Criação</th>
								<th>Autor</th>
								<th>Titulo</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{postsWaitingForApproval.map((post) => (
								<tr key={post._id} className={styles.post}>
									<th>{formatToDate(post.createdAt)}</th>
									<th>
										{post.author && (post.author as TUser).name
											? (post.author as TUser).name
											: "?"}
									</th>
									<th>{post.title}</th>
									<th className={styles.row}>
										<Link
											href={"/approve/" + post.slug}
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
									</th>
								</tr>
							))}
						</tbody>
					</table>
				) : (
					<>
						<p>Não existem publicações para aprovar</p>
					</>
				)}
			</div>
		</div>
	)
}
