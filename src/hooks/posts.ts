"use client"

import { TAuthor, TPost, TPostToPublish, TPostWithAuthorId, TPostWithAuthorObj } from "@/types/post"
import useUser from "./users"

export default function usePosts() {
	const { getUserById } = useUser()

	async function getPosts(token: string): Promise<TPostWithAuthorObj[] | []> {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})

			const postsRes: TPostWithAuthorId[] = await res.json()

			if (!postsRes || postsRes.length == 0) {
				console.error("COLCIC-ERR: No posts found")
				return []
			}

			let postsWithAuthors: TPostWithAuthorObj[] = []

			await Promise.all(
				postsRes.map(async (post) => {
					const authorRes = await getUserById(post.author, token)
					let author =
						authorRes ||
						({
							_id: "",
							name: "",
							profilePhoto: "",
						} as TAuthor)

					if (!author) {
						console.error("COLCIC-ERR: Author not found")
					}

					const postWithAuthor: TPostWithAuthorObj = { ...post, author: author }

					postsWithAuthors.push(postWithAuthor)
				})
			)
				.then((posts) => {
					return posts
				})
				.catch((err) => {
					console.error(err)
					return []
				})

			return postsWithAuthors
		} catch (err) {
			console.error(err)
			return []
		}
	}

	async function getSitePosts(): Promise<TPostWithAuthorId[] | undefined> {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/site")

			const postsRes: TPostWithAuthorId[] = await res.json()

			if (!postsRes || postsRes.length == 0) {
				console.error("COLCIC-ERR: No posts found")
				return []
			}

			return postsRes
		} catch (err) {
			console.error(err)
			return []
		}
	}

	async function getMuralPosts(): Promise<TPostWithAuthorId[] | undefined> {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/mural")

			const postsRes: TPostWithAuthorId[] = await res.json()

			if (!postsRes || postsRes.length == 0) {
				console.error("COLCIC-ERR: No posts found")
				return []
			}

			return postsRes
		} catch (err) {
			console.error(err)
			return []
		}
	}

	async function getHomePosts(token: string) {
		const homePostsIds = ["64aa1e197e1c99437ad22986"]
		const posts = await getPosts(token)

		if (!posts || posts.length === 0) {
			console.error("COLCIC-ERR: No home posts found")
			return []
		}

		const filteredPosts = posts.filter((post) => homePostsIds.includes(post._id))

		return filteredPosts
	}

	async function getPostBySlug(slug: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/" + slug)

			const postRes: TPostWithAuthorId = await res.json()

			if (!postRes) {
				console.error("COLCIC-ERR: Post not found")
				return null
			}

			return postRes
		} catch (err) {
			console.error(err)
			return null
		}
	}

	function getPostsByUser(userId: string) {
		return [] as TPostWithAuthorObj[]
		// const posts = postList.filter(
		// 	(post) => post.author_id === userId && post.status === "approved"
		// )

		// return posts
	}

	function getPostsWaitingForApproval() {
		return [] as TPostWithAuthorObj[]
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
		return [] as TPostWithAuthorObj[]
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

	async function createPost(post: TPostToPublish, token: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
				method: "POST",
				body: JSON.stringify(post),
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})

			const postRes: TPost = await res.json()

			if (!postRes) {
				console.error("COLCIC-ERR: No post created")
				return null
			}

			return postRes
		} catch (err) {
			console.error(err)
			return null
		}
	}

	async function deletePost(slug: string, token: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/delete/" + slug, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})

			const deleteRes = res.ok

			if (!deleteRes) {
				console.error("COLCIC-ERR: No post deleted")
				return null
			}

			return deleteRes
		} catch (err) {
			console.error(err)
			return null
		}
	}

	return {
		getPosts,
		getHomePosts,
		getPostBySlug,
		getPostsByUser,
		getPostsWaitingForApproval,
		getPostsWaitingForApprovalFromUser,
		createPost,
		deletePost,
		getMuralPosts,
		getSitePosts,
	}
}
