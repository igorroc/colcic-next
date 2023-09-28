"use client"

import React, { useState, useEffect } from "react"
import { usePosts } from "@/hooks/posts"
import Link from "next/link"
import { Button } from "@/components/Button"

import styles from "./posts.module.css"
import {
	AiFillCheckCircle,
	AiFillClockCircle,
	AiFillCloseCircle,
	AiFillEdit,
	AiFillStar,
} from "react-icons/ai"
import { BsFillEyeFill, BsFillTrashFill, BsFillTvFill } from "react-icons/bs"
import { TPost } from "@/types/post"
import { TUser } from "@/types/user"
import { useRouter } from "next/navigation"
import Loading from "@/components/Loading"
import { formatToDate } from "@/utils/formatToDate"
import { FaMouse } from "react-icons/fa"
import { toCapitalCase } from "@/utils/formatText"
import { useAuth } from "@/components/AuthProvider"
import { toast } from "react-hot-toast"

export default function Posts() {
	const { authUser } = useAuth()
	const router = useRouter()
	const { allPosts } = usePosts()
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		if (authUser && "type" in authUser && authUser.type != "admin") {
			toast.error("Você não tem permissão para acessar essa página")
			router.push("/posts")
			return
		}

		setLoading(false)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (!authUser) return <Loading />
	return (
		<div>
			<div className={styles.rowTitle}>
				<h1>Todas as Publicações</h1>
				{authUser && "type" in authUser && authUser.type == "admin" && (
					<Button label="Voltar" type="secondary" href={"/posts"} />
				)}
			</div>
			<div className={styles.content}>
				{loading ? (
					<Loading />
				) : allPosts.length > 0 ? (
					<table className={styles.table}>
						<thead>
							<tr>
								<th>Status</th>
								<th>Tipo</th>
								<th>Data</th>
								<th>Autor</th>
								<th>Título</th>
								<th>Ações</th>
							</tr>
						</thead>
						<tbody>
							{allPosts.map((post) => (
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
									<th>
										{post.types &&
											post.types.map((type, index) =>
												type == "destaque" ? (
													<AiFillStar
														key={index}
														title={toCapitalCase(type)}
													/>
												) : type == "mural" ? (
													<BsFillTvFill
														key={index}
														title={toCapitalCase(type)}
													/>
												) : type == "site" ? (
													<FaMouse
														key={index}
														title={toCapitalCase(type)}
													/>
												) : (
													"?"
												)
											)}
									</th>
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
