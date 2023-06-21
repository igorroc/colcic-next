import React from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

import MuralTimeLine from "@/components/MuralTimeLine"
import MuralPostList from "@/components/MuralPostList"
import MuralTimer from "@/components/MuralTimer"

import styles from "./mural.module.css"
import Logo from "/public/logo_large.svg"
import { TPost } from "@/types/post"

export default async function Mural() {
	const api_url = process.env.NEXT_PUBLIC_API_URL
	const url = `${api_url}/posts`

	const response = await fetch(url)
	const posts = await response.json()

	// const delay = Number(searchParams.get("delay")) || 10000
	const delay = 10000

	return (
		<main className={styles.main}>
			<div className={styles.logo}>
				<Image src={Logo} alt="Logo do colegiado" />
			</div>
			{(!posts || posts.length === 0) && <p>Carregando...</p>}
			
			{posts && posts.length > 0 && (
				<>
					<MuralPostList posts={posts} delay={delay} />
					<div className={styles.options}>
						<MuralTimeLine posts={posts} delay={delay} />
						<MuralTimer delay={delay} />
					</div>
				</>
			)}
		</main>
	)
}
