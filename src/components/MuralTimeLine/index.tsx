import { getMuralPosts } from "@/hooks/useMuralPosts"
import React, { useEffect, useState } from "react"
import styles from "./mural_timeline.module.css"

type MuralTimeLineProps = {
	activePost: number
	posts: ReturnType<typeof getMuralPosts>
}

export default function MuralTimeLine(props: MuralTimeLineProps) {
	return (
		<div className={styles.timeline}>
			{props.posts.map((item, index) => {
				return (
					<div
						className={[
							styles.timelineItem,
							props.activePost == index ? styles.active : "",
						].join(" ")}
						key={index}
					>
						<p>{item.title}</p>
					</div>
				)
			})}
		</div>
	)
}
