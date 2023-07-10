"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { formatToDate } from "@/utils/formatToDate"
import { FiArrowUpRight } from "react-icons/fi"

import usePosts from "@/hooks/posts"

import styles from "./homePosts.module.css"
import { Button } from "../Button"
import { TPost } from "@/types/post"
import { useUserToken } from "@/utils/handleUserToken"
import { TUser } from "@/types/user"

export default function HomePosts() {
	const { token } = useUserToken()
	const { getHomePosts } = usePosts()
	const [posts, setPosts] = useState<TPost[]>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getData() {
			const p = await getHomePosts()

			if (p && p.length > 0) {
				setPosts(p)
			}

			setLoading(false)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			{loading ? (
				<div>Carregando...</div>
			) : !posts || posts.length == 0 ? (
				<div>
					<p>
						Veja as últimas notícias do colegiado <Link href="/noticias">aqui</Link>
					</p>
				</div>
			) : (
				<div className={styles.noticias}>
					{posts.map((post, index: number) => (
						<div key={index} className={styles.card}>
							<div className={styles.postInfo}>
								{post.author && (post.author as TUser).name && (
									<div className={styles.postAuthorImage}>
										{/* eslint-disable-next-line  */}
										<img
											src={(post.author as TUser).profilePhoto}
											alt={(post.author as TUser).name}
											width={100}
											height={100}
										/>
									</div>
								)}

								<div className={styles.postAuthorInfo}>
									{post.author && (post.author as TUser).name && (
										<span className={styles.postAuthorName}>
											{(post.author as TUser).name}
										</span>
									)}

									<span className={styles.postDate}>
										{formatToDate(post.createdAt)}
									</span>
								</div>
							</div>
							<Link href={`/noticias/${post.slug}`} className={styles.postImage}>
								{/* eslint-disable-next-line */}
								<img src={post.horizontal_image} alt={post.title} />
								<div className={styles.arrowLink}>
									<FiArrowUpRight size={28} />
								</div>
							</Link>
							<div className={styles.postContent}>
								<Link className={styles.postTitle} href={`/noticias/${post.slug}`}>
									{post.title}
								</Link>
								<p className={styles.postDescription}>{post.description}</p>
								<Button
									label="Ler mais"
									type="secondary"
									href={`/noticias/${post.slug}`}
								/>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}
