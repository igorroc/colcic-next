import { PostType } from '@/app/api/posts/postList'
import React from 'react'

export default async function Posts() {
    // const posts = await fetch("http://localhost:3000/api/posts", {
    //     cache: "no-cache",
    // }).then(res => res.json()).then(posts => {
    //     return posts.map((post: PostType, index: number) => {
    //         return (
    //             <div key={index}>
    //                 <h1>{post.title}</h1>
    //                 <p>{post.description}</p>
    //             </div>
    //         )
    //     })
    // })

    return (
        <div>Lista de posts</div>
    )
}
