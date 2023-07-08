import { TAuthor, TPostWithAuthor } from "@/types/post"
import { postList } from "./postList"
import { getUserById } from "./users"

export function getPosts() {
	const posts = postList
	let postsWithAuthors: TPostWithAuthor[] = []

	posts.map((post) => {
		const author = getUserById(post.author_id)
		postsWithAuthors.push({ ...post, author })
	})

	return postsWithAuthors
}

export function getHomePosts() {
	const homePostsIds = ["1", "4", "6"]
	const posts = postList.filter((post) => homePostsIds.includes(post.id))
	let postsWithAuthors: TPostWithAuthor[] = []

	posts.map((post) => {
		const author = getUserById(post.author_id)
		postsWithAuthors.push({ ...post, author })
	})

	return postsWithAuthors
}

export function getPostBySlug(slug: string) {
	const post = postList.find((post) => post.slug === slug)

	if (post) {
		let postWithAuthor: TPostWithAuthor

		const author = getUserById(post.author_id)
		postWithAuthor = { ...post, author }

		return {
			post: postWithAuthor,
			status: 200,
		}
	} else {
		return { error: "Post not found", status: 404 }
	}
}

export function getPostsByUser(userId: string) {
	const posts = postList.filter((post) => post.author_id === userId && post.status === "approved")

	return posts
}

export function getPostsWaitingForApproval() {
	const posts = postList.filter((post) => post.status === "pending")
	let postsWithAuthors: TPostWithAuthor[] = []

	posts.map((post) => {
		const author: TAuthor = getUserById(post.author_id)
		postsWithAuthors.push({ ...post, author })
	})

	return postsWithAuthors
}

export function getPostsWaitingForApprovalFromUser(userId: string) {
	const posts = postList.filter((post) => post.status === "pending" && post.author_id === userId)
	let postsWithAuthors: TPostWithAuthor[] = []

	posts.map((post) => {
		const author = getUserById(post.author_id)
		postsWithAuthors.push({ ...post, author })
	})

	return postsWithAuthors
}
