"use client"

import { TAuthor, TPost, TPostWithAuthor } from "@/types/post"
import { postList } from "./postList"
import useUser from "./users"

export default function usePosts() {
	const { getUserById } = useUser()

	async function getPosts() {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts")

			const postsRes: TPost[] = await res.json()

			if (!postsRes || postsRes.length == 0) {
				console.error("COLCIC-ERR: No posts found")
				return []
			}

			let postsWithAuthors: TPostWithAuthor[] = []

			postsRes.map(async (post) => {
				const author = await getUserById(post.author)
				if (author === null) return console.error("COLCIC-ERR: Author not found")
				postsWithAuthors.push({ ...post, author_obj: author })
			})

			console.log("POSTS WITH AUTHORS", postsWithAuthors)

			return postsWithAuthors
		} catch (err) {
			console.error(err)
			return []
		}
	}

	async function getHomePosts() {
		const homePostsIds = ["64a3c2b99f2d581f1c2daacd"]
		const posts = await getPosts()

		if (!posts || posts.length === 0) {
			console.error("COLCIC-ERR: No home posts found")
			return []
		}

		const filteredPosts = posts.filter((post) => homePostsIds.includes(post._id))

		return filteredPosts
	}

	async function getPostBySlug(slug: string) {
		return null as TPostWithAuthor | null
		// const post = postList.find((post) => post.slug === slug)

		// if (post) {
		// 	let postWithAuthor: TPostWithAuthor

		// 	const author = await getUserById(post.author_id)
		// 	if (author === null) return console.error("COLCIC-ERR: Author not found")
		// 	postWithAuthor = { ...post, author }

		// 	return {
		// 		post: postWithAuthor,
		// 		status: 200,
		// 	}
		// } else {
		// 	return { error: "Post not found", status: 404 }
		// }
	}

	function getPostsByUser(userId: string) {
		return [] as TPostWithAuthor[]
		// const posts = postList.filter(
		// 	(post) => post.author_id === userId && post.status === "approved"
		// )

		// return posts
	}

	function getPostsWaitingForApproval() {
		return [] as TPostWithAuthor[]
		// const posts = postList.filter((post) => post.status === "pending")
		// let postsWithAuthors: TPostWithAuthor[] = []

		// posts.map(async (post) => {
		// 	const author = await getUserById(post.author_id)
		// 	if (author === null) return console.error("COLCIC-ERR: Author not found")
		// 	postsWithAuthors.push({ ...post, author })
		// })

		// return postsWithAuthors
	}

	function getPostsWaitingForApprovalFromUser(userId: string) {
		return [] as TPostWithAuthor[]
		// const posts = postList.filter(
		// 	(post) => post.status === "pending" && post.author_id === userId
		// )
		// let postsWithAuthors: TPostWithAuthor[] = []

		// posts.map(async (post) => {
		// 	const author = await getUserById(post.author_id)
		// 	if (author === null) return console.error("COLCIC-ERR: Author not found")
		// 	postsWithAuthors.push({ ...post, author })
		// })

		// return postsWithAuthors
	}

	return {
		getPosts,
		getHomePosts,
		getPostBySlug,
		getPostsByUser,
		getPostsWaitingForApproval,
		getPostsWaitingForApprovalFromUser,
	}
}
