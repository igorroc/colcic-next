"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"

import { FiArrowUpRight } from "react-icons/fi"

import { formatToDate } from "@/utils/formatToDate"

import styles from "./noticias.module.css"
import { TCategory, TPost } from "@/types/post"
import Loading from "@/components/Loading"
import { usePosts } from "@/hooks/posts"

export default function Noticias() {
	const { sitePosts } = usePosts()

	const [posts, setPosts] = useState<TPost[]>()
	const [mainPost, setMainPost] = useState<TPost>()
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		if (sitePosts) {
			const sortedPosts = sitePosts.sort((a, b) => {
				if (a.createdAt > b.createdAt) {
					return -1
				}
				if (a.createdAt < b.createdAt) {
					return 1
				}
				return 0
			})
			setPosts(sortedPosts)
			setMainPost(sortedPosts[0])
			setLoading(false)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<section className={[styles.hero, "MaxWidthWrapper"].join(" ")}>
				<h1>Notícias</h1>
			</section>

			{/* <section className="MaxWidthWrapper">filter</section> */}

			{loading && (
				<div className={styles.loadingWrapper}>
					<Loading />
				</div>
			)}

			{mainPost && (
				<section className={[styles.mainPost, "MaxWidthWrapper"].join(" ")}>
					<Link href={`/noticias/${mainPost.slug}`} className={styles.mainPostImage}>
						{/* eslint-disable-next-line */}
						<img src={mainPost.horizontal_image} alt={mainPost.title} />
						<div className={styles.arrowLink}>
							<FiArrowUpRight size={28} />
						</div>
					</Link>
					<div className={styles.postContent}>
						{mainPost.categories && (
							<div className={styles.postCategories}>
								{mainPost.categories.map(
									(category: TCategory, index: number) =>
										category && (
											<Link href="#" key={index} className={styles.category}>
												{category}
											</Link>
										)
								)}
							</div>
						)}
						<Link className={styles.postTitle} href={`/noticias/${mainPost.slug}`}>
							{mainPost.title}
						</Link>
						<p className={styles.postDescription}>{mainPost.description}</p>
						<Link href={`/noticias/${mainPost.slug}`}>Ler mais</Link>

						<div className={styles.postInfo}>
							{/* <div className={styles.postAuthorImage}>
								<img
									src={mainPost.author.profilePhoto}
									alt={mainPost.author.name}
									width={100}
									height={100}
								/>
							</div> */}
							<div className={styles.postAuthorInfo}>
								{/* <span className={styles.postAuthorName}>
									{mainPost.author.name}
								</span> */}
								<span className={styles.postDate}>
									{formatToDate(mainPost.createdAt)}
								</span>
							</div>
						</div>
					</div>
				</section>
			)}

			{posts && posts.length > 0 && (
				<section className={[styles.posts, "MaxWidthWrapper"].join(" ")}>
					{posts.slice(1).map((post, index: number) => (
						<div key={index} className={styles.postItem}>
							<Link href={`/noticias/${post.slug}`} className={styles.postImage}>
								{/* eslint-disable-next-line */}
								<img src={post.horizontal_image} alt={post.title} />
								<div className={styles.arrowLink}>
									<FiArrowUpRight size={28} />
								</div>
							</Link>
							<div className={styles.postContent}>
								{post.categories && (
									<div className={styles.postCategories}>
										{post.categories.map(
											(category: TCategory, index: number) => (
												<Link
													href="#"
													key={index}
													className={styles.category}
												>
													{category}
												</Link>
											)
										)}
									</div>
								)}
								<Link className={styles.postTitle} href={`/noticias/${post.slug}`}>
									{post.title}
								</Link>
								<p className={styles.postDescription}>{post.description}</p>
								<Link href={`/noticias/${post.slug}`}>Ler mais</Link>
								<div className={styles.postInfo}>
									{/* <div className={styles.postAuthorImage}>
										<img
											src={post.author.profilePhoto}
											alt={post.author.name}
											width={100}
											height={100}
										/>
									</div> */}
									<div className={styles.postAuthorInfo}>
										{/* <span className={styles.postAuthorName}>
											{post.author.name}
										</span> */}
										<span className={styles.postDate}>
											{formatToDate(post.createdAt)}
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</section>
			)}
		</>
	)
}
