import React from "react"
import Image from "next/image"
import { FiLink2 } from "react-icons/fi"
import { FaLinkedinIn } from "react-icons/fa"
import { AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineHeart } from "react-icons/ai"

import img404 from "/public/404.png"
import styles from "./page.module.css"

import { formatToDate } from "@/utils/formatToDate"

import MarkdownPrint from "@/components/MarkdownPrint"
import SharableLinks from "@/components/SharableLinks"
import { Button } from "@/components/Button"

import { TCategory } from "@/types/post"

interface PostPageType {
	params: {
		slug: string
	}
}

export const revalidate = 30

export default async function Post({ params }: PostPageType) {
	// const post = await getPostBySlug(params.slug)
	const api_url = process.env.NEXT_PUBLIC_API_URL
	const url = `${api_url}/post/${params.slug}`

	const response = await fetch(url)

	if (response.status != 200) {
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

	const post = await response.json()

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
								<div className={styles.iconContainer}>
									<FiLink2 size={22} />
								</div>
								<div className={styles.iconContainer}>
									<AiOutlineWhatsApp size={24} />
								</div>
								<div className={styles.iconContainer}>
									<FaLinkedinIn size={24} />
								</div>
								<div className={styles.iconContainer}>
									<AiOutlineTwitter size={24} />
								</div>
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
							<div className={styles.categories}>
								{post?.categories.map((category: TCategory, index: number) => (
									<span className={styles.categoriesTag} key={index}>
										{category.name}
									</span>
								))}
							</div>
							<h1 className={styles.postHeaderTitle}>{post?.title}</h1>
						</div>
						<div className={styles.sideHeaderContainer}>
							<div className={styles.avatarUserInfo}>
								<Image
									src={post.author.avatar}
									alt={`Foto de perfil de ${post.author.name}`}
								/>
								<div>
									<p className={styles.authorName}>{post?.author.name}</p>
									<p className={styles.postDate}>
										{formatToDate(post.created_at)}
									</p>
								</div>
							</div>
							<SharableLinks />
							<div className={styles.likeContainer}>
								<AiOutlineHeart />
								Curtir
							</div>
						</div>
					</div>
					<div className={styles.postBanner}>
						<Image src={post?.banner} alt="post banner" width={767} />
					</div>
					<div className={styles.bodyText}>
						<MarkdownPrint text={post.body} />
					</div>
				</>
			)}
		</div>
	)
}
