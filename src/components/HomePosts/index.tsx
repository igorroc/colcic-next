"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { formatToDate } from "@/utils/formatToDate"
import { FiArrowUpRight } from "react-icons/fi"

import usePosts from "@/hooks/posts"

import styles from "./homePosts.module.css"
import { Button } from "../Button"
import { TPostWithAuthorObj } from "@/types/post"
import { useUserToken } from "@/utils/handleUserToken"

export default function HomePosts() {
	const { token } = useUserToken()
	const { getHomePosts } = usePosts()
	const [posts, setPosts] = useState<TPostWithAuthorObj[]>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getData() {
			const p = await getHomePosts(token)

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
				<div>Não existem publicações.</div>
			) : (
				<div className={styles.noticias}>
					{posts.map((post, index: number) => (
						<div key={index} className={styles.card}>
							<div className={styles.postInfo}>
								<div className={styles.postAuthorImage}>
									{/* eslint-disable-next-line  */}
									<img
										src={post.author.profilePhoto}
										alt={post.author.name}
										width={100}
										height={100}
									/>
								</div>
								<div className={styles.postAuthorInfo}>
									<span className={styles.postAuthorName}>
										{post.author.name}
									</span>
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
								{/* <p className={styles.postDescription}>{post.description}</p> */}
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
