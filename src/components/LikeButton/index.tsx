"use client"

import { TPostWithAuthorId, TPostWithAuthorObj } from "@/types/post"
import { usePostLike } from "@/utils/handlePostLike"
import React, { useEffect } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"

import styles from "./like-button.module.css"

interface LikeButtonProps {
	post?: TPostWithAuthorId | TPostWithAuthorObj
	isPreview?: boolean
}

export default function LikeButton(props: LikeButtonProps) {
	const { likedPosts, likeCurrentPost } = usePostLike()

	async function handleLike() {
		if (!props.post) return

		likeCurrentPost(props.post._id)
	}

	return (
		<div
			className={[
				styles.likeContainer,
				props.post && likedPosts?.includes(props.post._id) ? styles.liked : "",
			].join(" ")}
			onClick={handleLike}
		>
			{props.post && likedPosts?.includes(props.post._id) ? (
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
