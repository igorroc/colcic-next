import { postList } from "./postList"

export function getPosts() {
	return postList
}

export function getHomePosts() {
	const homePostsIds = [1, 4, 6]
	const posts = postList.filter((post) => homePostsIds.includes(post.id))

	return posts
}

export function getPostBySlug(slug: string) {
	const post = postList.find((post) => post.slug === slug)

	if (post) {
		return {
            post,
            status: 200
        }
	} else {
		return { error: "Post not found", status: 404 }
	}
}
