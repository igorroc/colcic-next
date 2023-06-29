"use client"

import React, { useEffect, useState } from "react"

import { TPostWithAuthor } from "@/types/post"

import styles from "./mural_post_list.module.css"

import MuralPost from "./MuralPost"

type MuralPostsListProps = {
	delay: number
	posts: TPostWithAuthor[]
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
					<MuralPost key={index} index={index} activeItem={activeItem} post={post} />
				))}
			</div>
		</div>
	)
}
