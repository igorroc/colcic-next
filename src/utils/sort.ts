import { TPost } from "@/types/post"

export const sortPosts = (a: TPost, b: TPost) => {
	return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
}
