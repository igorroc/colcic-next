"use client"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { PostT, getPostBySlug } from "@/hooks/usePosts"
import React, { useEffect, useState } from "react"

import styles from "./page.module.css";
import { formatToDate } from "@/utils/formatToDate"

interface PostType {
	params: {
		slug: string
	}
}

export default function Post({ params }: PostType) {
	const [post, setPost] = useState<PostT>()
	const date =
		useEffect(() => {
			async function loadPostInfo() {
				const postFetched = await getPostBySlug(params.slug);
				setPost(postFetched)
			}
			loadPostInfo();
		}, [])


	return (
		<div>
			<Header />
			{!!post && <div className={styles.mainContainer}>
				<div className={styles.postHeader}>
					<div>
						<span className={styles.categoriesTag}>{post?.categories[0].name}</span>
						<h1 className={styles.postHeaderTitle}>{post?.title}</h1>
					</div>
					<div>
						<div >
							<p style={{ color: 'white', fontWeight: 'bold', margin: 0, fontSize: 12 }}>{post?.author.name}</p>
							<p style={{ margin: 0, color: 'var(--background-color-2)', fontStyle: 'italic', fontSize: 12 }}>{formatToDate(post.created_at)}</p>
						</div>
					</div>
				</div>
			</div>}
			<Footer />
		</div>
	)
}
