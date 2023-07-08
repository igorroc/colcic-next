"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { formatToDate } from "@/utils/formatToDate"
import { FiArrowUpRight } from "react-icons/fi"

import usePosts from "@/hooks/posts"

import styles from "./homePosts.module.css"
import { Button } from "../Button"
import { TPostWithAuthor } from "@/types/post"

export default function HomePosts() {
	const { getHomePosts } = usePosts()
	const [posts, setPosts] = useState<TPostWithAuthor[]>()
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
				<div>Não existem publicações.</div>
			) : (
				<div className={styles.noticias}>
					{posts.map((post, index: number) => (
						<div key={index} className={styles.card}>
							<div className={styles.postInfo}>
								<div className={styles.postAuthorImage}>
									<Image
										src={post.author_obj.profilePhoto}
										alt={post.author_obj.name}
										width={100}
										height={100}
									/>
								</div>
								<div className={styles.postAuthorInfo}>
									<span className={styles.postAuthorName}>
										{post.author_obj.name}
									</span>
									<span className={styles.postDate}>
										{formatToDate(post.created_at)}
									</span>
								</div>
							</div>
							<Link href={`/noticias/${post._id}`} className={styles.postImage}>
								<Image src={post.image} alt={post.title} />
								<div className={styles.arrowLink}>
									<FiArrowUpRight size={28} />
								</div>
							</Link>
							<div className={styles.postContent}>
								<Link className={styles.postTitle} href={`/noticias/${post._id}`}>
									{post.title}
								</Link>
								{/* <p className={styles.postDescription}>{post.description}</p> */}
								<Button
									label="Ler mais"
									type="secondary"
									href={`/noticias/${post._id}`}
								/>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	)
}
