"use client"

import { TPostWithAuthor } from "@/types/post"
import { usePostLike } from "@/utils/handlePostLike"
import React, { useEffect } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import styles from "./like-button.module.css"

interface LikeButtonProps {
	post: TPostWithAuthor
}

export default function LikeButton(props: LikeButtonProps) {
	const { likedPosts, likeCurrentPost } = usePostLike()

	async function handleLike() {
		likeCurrentPost(props.post.slug)
	}

	return (
		<div
			className={[
				styles.likeContainer,
				likedPosts?.includes(props.post.slug) ? styles.liked : "",
			].join(" ")}
			onClick={handleLike}
		>
			{likedPosts?.includes(props.post.slug) ? (
				<>
					<AiFillHeart />
					<span>Curtido</span>
				</>
			) : (
				<>
					<AiOutlineHeart />
					<span>Curtir</span>
				</>
			)}
		</div>
	)
}