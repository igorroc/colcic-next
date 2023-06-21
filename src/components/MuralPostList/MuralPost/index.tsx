import Image from "next/image"
import React from "react"

import styles from "./muralPost.module.css"

import { TCategory, TPost } from "@/types/post"
import { formatToDate } from "@/utils/formatToDate"

import Logo from "/public/favicon_bg.png"
import { useQRCode } from "next-qrcode"
import Link from "next/link"

type MuralPostProps = {
	post: TPost
	activeItem: number
	index: number
}

export default function MuralPost(props: MuralPostProps) {
	const { Canvas } = useQRCode()


	return (
		<div
			className={styles.post}
			key={props.index}
			style={{
				transform: `translateX(${-props.activeItem * 100 + props.index * 100}vw)`,
			}}
		>
			<div className={styles.postBanner}>
				<Image src={props.post.banner} alt="Banner do post" />
			</div>
			<div className={styles.postContent}>
				<div className={styles.postCategoryList}>
					{props.post.categories.map((category: TCategory, index_c) => (
						<div className={styles.postCategory} key={index_c}>
							<span>{category.name}</span>
						</div>
					))}
				</div>
				<div className={styles.postTitle}>
					<Link href={"/noticias/" + props.post.slug}>
						<h1>{props.post.title}</h1>
					</Link>
				</div>
				<div className={styles.postDescription}>
					<p>{props.post.description}</p>
				</div>

				<div className={styles.bottomInfo}>
					<div className={styles.postAuthor}>
						<div className={styles.authorPicture}>
							<Image
								src={props.post.author.avatar}
								alt={`Foto de ${props.post.author.name}`}
							/>
						</div>
						<div className={styles.authorInfo}>
							<span className={styles.authorName}>{props.post.author.name}</span>
							<span className={styles.authorDate}>
								{formatToDate(props.post.created_at)}
							</span>
						</div>
					</div>
					<div className={styles.continue}>
						<span>Continue no QR Code</span>
						<div className={styles.qrCode}>
							<Canvas
								text={process.env.NEXT_PUBLIC_URL + props.post.slug}
								logo={{
									src: Logo.src,
									options: {
										width: 40,
									}
								}}
								options={{
									level: "M",
									margin: 3,
									scale: 4,
									width: 200,
									color: {
										dark: "#000",
										light: "#fff",
									},
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
