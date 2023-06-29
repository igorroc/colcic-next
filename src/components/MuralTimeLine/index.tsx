"use client"

import { TPost, TPostWithAuthor } from "@/types/post"
import React, { useEffect, useState } from "react"
import styles from "./mural_timeline.module.css"

type MuralTimeLineProps = {
	delay: number
	posts: TPostWithAuthor[]
}

export default function MuralTimeLine(props: MuralTimeLineProps) {
	const [activeItem, setActiveItem] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveItem((prevCount) => (prevCount + 1) % props.posts.length)
		}, props.delay)

		return () => clearInterval(interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.timeline}>
			{props.posts.map((item, index) => {
				return (
					<div
						className={[
							styles.timelineItem,
							activeItem == index ? styles.active : "",
						].join(" ")}
						key={index}
						style={{ "--delay": `${props.delay}ms` } as React.CSSProperties}
					>
						<p>{item.title}</p>
					</div>
				)
			})}
		</div>
	)
}
