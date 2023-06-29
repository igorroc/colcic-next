import { LOCAL_STORAGE_KEY } from "@/constants/storage"
import { useEffect, useState } from "react"

export function usePostLike() {
	const isClient = typeof window !== "undefined"
	const [likedPosts, setLikedPosts] = useState<string[]>([])

	useEffect(() => {
		const storedLikedPosts = window.localStorage.getItem(`${LOCAL_STORAGE_KEY}liked-posts`)
		if (storedLikedPosts) {
			setLikedPosts(storedLikedPosts.split(","))
		}
	}, [])

	const likeCurrentPost = (slug: string) => {
		setLikedPosts((prevLikedPosts) => {
			const newArray = [...prevLikedPosts]

			// check if this slug is already in the array
			const isAlreadyLiked = newArray.includes(slug)
			if (isAlreadyLiked) {
				dislikeCurrentPost(slug)
				return newArray
			}

			// add the slug to the array
			newArray.push(slug)

			if (isClient) {
				window.localStorage.setItem(`${LOCAL_STORAGE_KEY}liked-posts`, newArray.join(","))
			}

			return newArray
		})
	}

	const dislikeCurrentPost = (slug: string) => {
		setLikedPosts((prevLikedPosts) => {
			const newArray = [...prevLikedPosts]

			// check if this slug is already in the array
			const index = newArray.indexOf(slug)
			if (index > -1) {
				newArray.splice(index, 1)
			}

			if (isClient) {
				window.localStorage.setItem(`${LOCAL_STORAGE_KEY}liked-posts`, newArray.join(","))
			}

			return newArray
		})
	}

	return { likedPosts, likeCurrentPost, dislikeCurrentPost }
}
