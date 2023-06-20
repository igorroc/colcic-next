import React from "react"
import QR from "/public/qr.png"
import styles from "./mural_post_list.module.css"
import Image from "next/image"
import { getMuralPosts } from "@/hooks/useMuralPosts"

type MuralPostsListProps = {
	posts: ReturnType<typeof getMuralPosts>
	activePost: number
}
export default function MuralPostList(props: MuralPostsListProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.postList}>
				{props.posts.map((post, index) => (
					<div
						className={styles.post}
						key={index}
						style={{
							transform: `translateX(${-props.activePost * 100 + index * 100}vw)`,
						}}
					>
						<div className={styles.postBanner}>
							<Image src={post.image} alt="Banner do post" />
						</div>
						<div className={styles.postContent}>
							<div className={styles.postCategoryList}>
								{post.categories.map((category, index_c) => {
									return (
										<div className={styles.postCategory} key={index_c}>
											<span>{category}</span>
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
										<span className={styles.authorDate}>{post.created_at}</span>
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
