"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

import MuralTimeLine from "@/components/MuralTimeLine"
import MuralPostList from "@/components/MuralPostList"
import MuralTimer from "@/components/MuralTimer"

import styles from "./mural.module.css"
import Logo from "/public/logo_large.svg"
import usePosts from "@/hooks/posts"
import { TPostWithAuthorObj } from "@/types/post"
import QRCode from "@/components/QRCode"
import Countdown from "@/components/Countdown"
import { useUserToken } from "@/utils/handleUserToken"

export default function Mural() {
	const { token } = useUserToken()
	const searchParams = useSearchParams()
	const delay = Number(searchParams.get("delay")) || 10000
	const revalidateDelay = Number(searchParams.get("revalidate")) || 30 * 60

	const [loading, setLoading] = useState(true)
	const { getPosts } = usePosts()
	const [posts, setPosts] = useState<TPostWithAuthorObj[]>()

	useEffect(() => {
		async function loadPosts() {
			const p = await getPosts(token)
			if (p) {
				setPosts(p.reverse())
			}
			setLoading(false)
		}

		const intervalDelay = revalidateDelay * 1000

		const interval = setInterval(async () => {
			setLoading(true)
			loadPosts()
			console.warn("COLCIC-LOG: Revalidating posts")
		}, intervalDelay)

		loadPosts()

		return () => clearInterval(interval)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<main className={styles.main}>
			<div className={styles.logo}>
				<Image src={Logo} alt="Logo do colegiado" />
			</div>
			{loading ? (
				<div className={styles.centered}>
					<p>Carregando...</p>
				</div>
			) : null}

			{!loading && (!posts || posts.length === 0) && (
				<div className={styles.centered}>
					<p>
						Novas notícias devem aparecer em{" "}
						<Countdown timeInSeconds={revalidateDelay} />
					</p>
					<p>Que tal dar uma olhada no site enquanto isso?</p>
					<QRCode text={process.env.NEXT_PUBLIC_URL || "/"} />
				</div>
			)}

			{posts && posts.length > 0 && (
				<>
					<MuralPostList posts={posts} delay={delay} />
					<div className={styles.options}>
						<MuralTimeLine posts={posts} delay={delay} />
						{/* <MuralTimer delay={delay} /> */}
					</div>
				</>
			)}
		</main>
	)
}
