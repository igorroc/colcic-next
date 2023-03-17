import React from 'react'

interface PostType {
    slug: string
}

export default function Post(params: PostType) {
    return (
        <div>Post {params.slug}</div>
    )
}
