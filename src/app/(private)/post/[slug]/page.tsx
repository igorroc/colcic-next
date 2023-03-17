import React from 'react'

interface PostType {
    params: {

        slug: string
    }
}

export default function Post({ params }: PostType) {
    return (
        <div>
            <h1>Post {params.slug}</h1>
        </div>
    )
}
