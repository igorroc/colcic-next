"use client"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

import { getMuralPosts } from "@/hooks/useMuralPosts"

import MuralTimeLine from "@/components/MuralTimeLine"
import MuralPostList from "@/components/MuralPostList"
import MuralTimer from "@/components/MuralTimer"

import styles from "./mural.module.css"
import Logo from "/public/logo_large.svg"

export default function Mural() {
	const searchParams = useSearchParams()

	const [activeItem, setActiveItem] = useState(0)

	const posts = getMuralPosts()

	const delay = Number(searchParams.get("delay")) || 10000

	console.log(delay)

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
