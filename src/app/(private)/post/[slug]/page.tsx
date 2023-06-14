"use client"
import React, { useEffect, useState } from "react"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import styles from "./page.module.css";
import { PostT, getPostBySlug } from "@/hooks/usePosts"
import Image from "next/image"
import dynamic from "next/dynamic"

import { formatToDate } from "@/utils/formatToDate"

import { FiLink2 } from 'react-icons/fi';
import { AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineHeart } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';


const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), { ssr: false })

interface PostType {
	params: {
		slug: string
	}
}

export default function Post({ params }: PostType) {
	const [post, setPost] = useState<PostT>()
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
					<div className={styles.rightSideHeaderContainer}>
						<div className={styles.avatarUserInfo}>
							<Image
								src={post.author.avatar}
								alt="icone autor"
								width={50}
								style={{
									borderRadius: '100%'
								}}
							/>
							<div >
								<p style={{ color: 'white', fontWeight: 'bold', margin: 0, fontSize: 12 }}>{post?.author.name}</p>
								<p style={{ margin: 0, color: 'var(--background-color-2)', fontStyle: 'italic', fontSize: 12 }}>{formatToDate(post.created_at)}</p>
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
				<Image
					src={post?.banner}
					alt="post banner"
					width={767}
					style={{
						marginTop: -40,
						borderRadius: 10,
					}}
				/>
				<div style={{ marginTop: 60 }}>
					<MarkdownPreview
						source={post.body}
						wrapperElement={{
							"data-color-mode": "light"
						}}
						style={{
							backgroundColor: 'transparent'
						}}
					/>
				</div>
			</div>}
			<Footer />
		</div>
	)
}
