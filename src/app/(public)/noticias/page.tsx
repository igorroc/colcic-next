import Image from "next/image"
import Link from "next/link"
import React from "react"

import { FiArrowUpRight } from "react-icons/fi"

import { formatToDate } from "@/utils/formatToDate"

import styles from "./noticias.module.css"
import { getPosts } from "@/hooks/posts"

export default async function Noticias() {
	const posts = getPosts()
	const mainPost = posts[0]

	return (
		<>
			<section className={[styles.hero, "MaxWidthWrapper"].join(" ")}>
				<h1>Notícias</h1>
			</section>

			<section className="MaxWidthWrapper">filter</section>

			{posts.length > 0 && (
				<section className={[styles.mainPost, "MaxWidthWrapper"].join(" ")}>
					<Link href={`/noticias/${mainPost.slug}`} className={styles.mainPostImage}>
						<Image src={mainPost.banner} alt={mainPost.title} />
						<div className={styles.arrowLink}>
							<FiArrowUpRight size={28} />
						</div>
					</Link>
					<div className={styles.postContent}>
						<div className={styles.postCategories}>
							{mainPost.categories.map((category: any, index: number) => (
								<Link href="#" key={index} className={styles.category}>
									{category.name}
								</Link>
							))}
						</div>
						<Link className={styles.postTitle} href={`/noticias/${mainPost.slug}`}>
							{mainPost.title}
						</Link>
						<p className={styles.postDescription}>{mainPost.description}</p>
						<Link href={`/noticias/${mainPost.slug}`}>Ler mais</Link>
						<div className={styles.postInfo}>
							<div className={styles.postAuthorImage}>
								<Image
									src={mainPost.author.profilePhoto}
									alt={mainPost.author.name}
									width={100}
									height={100}
								/>
							</div>
							<div className={styles.postAuthorInfo}>
								<span className={styles.postAuthorName}>
									{mainPost.author.name}
								</span>
								<span className={styles.postDate}>
									{formatToDate(mainPost.created_at)}
								</span>
							</div>
						</div>
					</div>
				</section>
			)}

			{posts.length > 0 && (
				<section className={[styles.posts, "MaxWidthWrapper"].join(" ")}>
					{posts.slice(1).map((post, index: number) => (
						<div key={index} className={styles.postItem}>
							<Link href={`/noticias/${post.slug}`} className={styles.postImage}>
								<Image src={post.banner} alt={post.title} />
								<div className={styles.arrowLink}>
									<FiArrowUpRight size={28} />
								</div>
							</Link>
							<div className={styles.postContent}>
								<div className={styles.postCategories}>
									{post.categories.map((category: any, index: number) => (
										<Link href="#" key={index} className={styles.category}>
											{category.name}
										</Link>
									))}
								</div>
								<Link className={styles.postTitle} href={`/noticias/${post.slug}`}>
									{post.title}
								</Link>
								<p className={styles.postDescription}>{post.description}</p>
								<Link href={`/noticias/${post.slug}`}>Ler mais</Link>
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
										<span className={styles.postAuthorName}>
											{post.author.name}
										</span>
										<span className={styles.postDate}>
											{formatToDate(post.created_at)}
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
