"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { AiOutlineHeart } from "react-icons/ai"

import img404 from "/public/404.png"
import styles from "./page.module.css"

import { formatToDate } from "@/utils/formatToDate"

import MarkdownPrint from "@/components/MarkdownPrint"
import SharableLinks from "@/components/SharableLinks"
import { Button } from "@/components/Button"

import { TCategory, TPostWithAuthorId, TPostWithAuthorObj } from "@/types/post"
import usePosts from "@/hooks/posts"
import LikeButton from "@/components/LikeButton"

interface PostPageType {
	params: {
		slug: string
	}
}

export const revalidate = 30

export default function Post({ params }: PostPageType) {
	const { getPostBySlug } = usePosts()
	const [post, setPost] = useState<TPostWithAuthorId>()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadPost() {
			const p = await getPostBySlug(params.slug)

			if (p) {
				setPost(p)
			}

			setLoading(false)
		}

		loadPost()
	}, [params.slug, getPostBySlug])

	if (!post && !loading) {
		return (
			<div className={styles.mainContainer}>
				<div className={styles.error}>
					<div className={styles.errorContent}>
						<span>OPS....</span>
						<h2>
							Algo de errado
							<br />
							<b>aconteceu</b>
						</h2>
						<p>
							A notícia <code>{params.slug}</code> que você solicitou aparentemente
							não existe. Você tem certeza que está no caminho certo?
						</p>
						<Button label="Voltar para notícias" type="primary" href="/noticias" />
					</div>
					<div className={styles.errorImage}>
						<Image src={img404} alt="Página não encontrada" />
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.mainContainer}>
			{!post && (
				<div className={styles.skeleton}>
					<div className={styles.postHeader}>
						<div
							className={[
								styles.sideHeaderContainer,
								styles.leftSideHeaderContainer,
							].join(" ")}
						>
							<span className={styles.categoriesTag}>
								<span className={styles.skeletonText}></span>
							</span>
							<h1 className={styles.postHeaderTitle}>
								<span className={styles.skeletonText}></span>
							</h1>
						</div>
						<div className={styles.sideHeaderContainer}>
							<div className={styles.avatarUserInfo}>
								<div className={styles.skeletonSmallImage}></div>

								<div>
									<p className={styles.authorName}>
										<span
											className={[
												styles.skeletonText,
												styles.skeletonTextMedium,
											].join(" ")}
										></span>
									</p>
									<p className={styles.postDate}>
										<span className={styles.skeletonText}></span>
									</p>
								</div>
							</div>
							<div className={styles.socialMediaIconsContainer}>
								{[...Array(4)].map((_, index) => (
									<div className={styles.iconContainer} key={index}></div>
								))}
							</div>
							<div className={styles.likeContainer}>
								<AiOutlineHeart />
								Curtir
							</div>
						</div>
					</div>
					<div className={styles.postBanner}>
						<div className={styles.skeletonImage}></div>
					</div>
					<div className={styles.bodyText}>
						{[...Array(10)].map((_, index) => (
							<span className={styles.skeletonText} key={index}></span>
						))}
					</div>
				</div>
			)}
			{!!post && (
				<>
					<div className={styles.postHeader}>
						<div
							className={[
								styles.sideHeaderContainer,
								styles.leftSideHeaderContainer,
							].join(" ")}
						>
							{post.categories && (
								<div className={styles.categories}>
									{post.categories.map((category: TCategory, index: number) => (
										<span className={styles.categoriesTag} key={index}>
											{category}
										</span>
									))}
								</div>
							)}
							<h1 className={styles.postHeaderTitle}>{post.title}</h1>
						</div>
						<div className={styles.sideHeaderContainer}>
							{/* <div className={styles.avatarUserInfo}>
								<Image
									src={post.author.profilePhoto}
									alt={`Foto de perfil de ${post.author.name}`}
									width={100}
									height={100}
								/>
								<div>
									<p className={styles.authorName}>{post.author.name}</p>
									<p className={styles.postDate}>
										{formatToDate(post.createdAt)}
									</p>
								</div>
							</div> */}
							<SharableLinks />
							<LikeButton post={post} />
						</div>
					</div>
					<div className={styles.postBanner}>
						<Image src={post.horizontal_image} alt="post banner" width={767} />
					</div>
					<div className={styles.bodyText}>
						<MarkdownPrint text={post.body} />
					</div>
				</>
			)}
		</div>
	)
}
