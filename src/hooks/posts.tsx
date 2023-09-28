"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { PostStatus, TAuthor, TPost, TPostToPublish } from "@/types/post"
import { useUserToken } from "@/utils/handleUserToken"

import { useUsers } from "./users"

async function getActivePosts() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/active")

		const postsRes: TPost[] = await res.json()

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

async function getSitePosts() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/site")

		const postsRes: TPost[] = await res.json()

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

async function getMuralPosts() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/mural")

		const postsRes: TPost[] = await res.json()

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

async function saveHomePosts(posts: string[], token: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/home", {
			method: "PUT",
			body: JSON.stringify(posts),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})

		const postRes = res.ok

		if (!postRes) {
			console.error("COLCIC-ERR: No posts save")
			return null
		}

		return postRes
	} catch (err) {
		console.error(err)
		return null
	}
}

async function getPostBySlug(slug: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/" + slug)

		if (res.ok) {
			const postRes: TPost = await res.json()

			if (!postRes) {
				console.error("COLCIC-ERR: Post not found")
				return null
			}

			return postRes
		}
		return null
	} catch (err) {
		console.error(err)
		return null
	}
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

async function editPost(post: TPostToPublish, token: string, slug: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/" + slug, {
			method: "PUT",
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

async function approvePost(slug: string, token: string, status: PostStatus) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/approve/" + slug, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify({ status: status }),
		})

		const postRes = res.ok

		if (!postRes) {
			console.error("COLCIC-ERR: Post approve error")
			return null
		}

		return postRes
	} catch (err) {
		console.error(err)
		return null
	}
}

async function getHomePosts() {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/home")

		const postsRes: TPost[] = await res.json()

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

async function getMyPosts(token: string): Promise<TPost[] | []> {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/my-active-posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})

		const postsRes: TPost[] = await res.json()

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

async function getMyPostsWaitingForApproval(token: string) {
	try {
		const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/my-pending-posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})

		const postsRes: TPost[] = await res.json()

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

export const PostsContext = createContext({
	allPosts: [] as TPost[] | [],
	homePosts: [] as TPost[] | [],
	sitePosts: [] as TPost[] | [],

	postsWaitingForApproval: [] as TPost[] | [],

	myPosts: [] as TPost[] | [],
	myPostsWaitingForApproval: [] as TPost[] | [],
})

export function PostsProvider({ children }: { children: ReactNode }) {
	const { token } = useUserToken()
	const { getUserById } = useUsers()

	const [allPosts, setAllPosts] = useState<TPost[] | []>([])
	const [homePosts, setHomePosts] = useState<TPost[] | []>([])
	const [sitePosts, setSitePosts] = useState<TPost[] | []>([])

	const [postsWaitingForApproval, setPostsWaitingForApproval] = useState<TPost[] | []>([])

	const [myPosts, setMyPosts] = useState<TPost[] | []>([])
	const [myPostsWaitingForApproval, setMyPostsWaitingForApproval] = useState<TPost[] | []>([])

	async function getPostsWaitingForApproval(token: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts/pending", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})

			const postsRes: TPost[] = await res.json()

			if (!postsRes || postsRes.length == 0) {
				console.error("COLCIC-ERR: No posts found")
				return []
			}

			let postsWithAuthors: TPost[] = []

			await Promise.all(
				postsRes.map(async (post) => {
					let authorId: string
					if (!post.author) {
						return post
					}
					if (typeof post.author === "string") {
						authorId = post.author
					} else {
						authorId = post.author._id
					}

					const authorRes = await getUserById(authorId)
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

					const postWithAuthor: TPost = { ...post, author: author }

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

	async function getAllPosts(token: string) {
		try {
			const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/posts", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
				},
			})

			const postsRes: TPost[] = await res.json()

			if (!postsRes || postsRes.length == 0) {
				console.error("COLCIC-ERR: No posts found")
				return []
			}

			let postsWithAuthors: TPost[] = []

			await Promise.all(
				postsRes.map(async (post) => {
					let authorId: string
					if (!post.author) {
						return post
					}
					if (typeof post.author === "string") {
						authorId = post.author
					} else {
						authorId = post.author._id
					}

					const authorRes = await getUserById(authorId)
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

					const postWithAuthor: TPost = { ...post, author: author }

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

	useEffect(() => {
		if (token) {
			getMyPosts(token).then((posts) => setMyPosts(posts))
			getMyPostsWaitingForApproval(token).then((posts) => setMyPostsWaitingForApproval(posts))
			getHomePosts().then((posts) => setHomePosts(posts))
			getPostsWaitingForApproval(token).then((posts) => setPostsWaitingForApproval(posts))
			getAllPosts(token).then((posts) => setAllPosts(posts))
			getSitePosts().then((posts) => setSitePosts(posts))
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<PostsContext.Provider
			value={{
				myPosts,
				myPostsWaitingForApproval,
				homePosts,
				sitePosts,
				postsWaitingForApproval,
				allPosts,
			}}
		>
			{children}
		</PostsContext.Provider>
	)
}

export function usePosts() {
	return useContext(PostsContext)
}
