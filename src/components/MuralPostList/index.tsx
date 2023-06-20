import React, { useEffect, useState } from "react"
import Image from "next/image"

import { TCategory, TPost } from "@/types/post"

import styles from "./mural_post_list.module.css"

import QR from "/public/qr.png"
import { formatToDate } from "@/utils/formatToDate"

type MuralPostsListProps = {
	delay: number
	posts: TPost[]
}
export default function MuralPostList(props: MuralPostsListProps) {
	const [activeItem, setActiveItem] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveItem((prevCount) => (prevCount + 1) % props.posts.length)
		}, props.delay)
		return () => clearInterval(interval)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.postList}>
				{props.posts.map((post, index) => (
					<div
						className={styles.post}
						key={index}
						style={{
							transform: `translateX(${-activeItem * 100 + index * 100}vw)`,
						}}
					>
						<div className={styles.postBanner}>
							<Image src={post.banner} alt="Banner do post" />
						</div>
						<div className={styles.postContent}>
							<div className={styles.postCategoryList}>
								{post.categories.map((category: TCategory, index_c) => {
									return (
										<div className={styles.postCategory} key={index_c}>
											<span>{category.name}</span>
										</div>
									)
								})}
							</div>
							<div className={styles.postTitle}>
								<h1>{post.title}</h1>
							</div>
							<div className={styles.postDescription}>
								<p>{post.description}</p>
							</div>

							<div className={styles.bottomInfo}>
								<div className={styles.postAuthor}>
									<div className={styles.authorPicture}>
										<Image
											src={post.author.avatar}
											alt={`Foto de ${post.author.name}`}
										/>
									</div>
									<div className={styles.authorInfo}>
										<span className={styles.authorName}>
											{post.author.name}
										</span>
										<span className={styles.authorDate}>
											{formatToDate(post.created_at)}
										</span>
									</div>
								</div>
								<div className={styles.continue}>
									<span>Continue no QR Code</span>
									<div className={styles.qrCode}>
										<Image src={QR} alt="QR Code" />
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
