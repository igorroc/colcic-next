"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

import { formatToDate } from "@/utils/formatToDate"
import { FiArrowUpRight } from "react-icons/fi"

import usePosts from "@/hooks/posts"

import styles from "./homePosts.module.css"
import { Button } from "../Button"

export default function HomePosts() {
	const { getHomePosts } = usePosts()
	const posts = getHomePosts()

	if (!posts) return <div>Loading...</div>
    if(posts.length === 0) return <div>Não existem publicações.</div>
    
	return (
		<div className={styles.noticias}>
			{posts.map((post, index: number) => (
				<div key={index} className={styles.card}>
					<div className={styles.postInfo}>
						<div className={styles.postAuthorImage}>
							<Image
								src={post.author.profilePhoto}
								alt={post.author.name}
								width={100}
								height={100}
							/>
						</div>
						<div className={styles.postAuthorInfo}>
							<span className={styles.postAuthorName}>{post.author.name}</span>
							<span className={styles.postDate}>{formatToDate(post.created_at)}</span>
						</div>
					</div>
					<Link href={`/noticias/${post.slug}`} className={styles.postImage}>
						<Image src={post.banner} alt={post.title} />
						<div className={styles.arrowLink}>
							<FiArrowUpRight size={28} />
						</div>
					</Link>
					<div className={styles.postContent}>
						<Link className={styles.postTitle} href={`/noticias/${post.slug}`}>
							{post.title}
						</Link>
						<p className={styles.postDescription}>{post.description}</p>
						<Button label="Ler mais" type="secondary" href={`/noticias/${post.slug}`} />
					</div>
				</div>
			))}
		</div>
	)
}
