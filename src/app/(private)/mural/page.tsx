"use client"

import MuralTimeLine from "@/components/MuralTimeLine"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import styles from "./mural.module.css"
import Logo from "/public/logo_large.svg"
import MuralPostList from "@/components/MuralPostList"
import MuralTimer from "@/components/MuralTimer"
import { getMuralPosts } from "@/hooks/useMuralPosts"

export default function Mural() {
	const delay = 6000
	const [activeItem, setActiveItem] = useState(0)
	const posts = getMuralPosts()

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveItem((prevCount) => (prevCount + 1) % posts.length)
		}, delay)

		return () => {
			clearInterval(interval)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<main className={styles.main}>
			<div className={styles.logo}>
				<Image src={Logo} alt="Logo do colegiado" />
			</div>
			<MuralPostList posts={posts} activePost={activeItem} />
			<div className={styles.options}>
				<MuralTimeLine activePost={activeItem} posts={posts} />
				<MuralTimer delay={delay} />
			</div>
		</main>
	)
}
