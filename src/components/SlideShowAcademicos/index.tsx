import Link from "next/link"
import React from "react"

import styles from "./slideshow.module.css"

import { academicos } from "@/changeable/inicio"

export default function SlideShowAcademicos() {
	return (
		<div className={styles.wrapperSlideShow}>
			<div className={styles.slideShow}>
				{academicos.map((item: any, index: number) => (
					<Link
						className={styles.slide}
						target={item.target ? item.target : "_self"}
						href={item.href ? item.href : "#"}
						key={index}
					>
						<span className={styles.icon}>{item.icon ? item.icon : "📚"}</span>
						{item.title ? (
							<p>
								{item.title}
								<br />
								{item.description ? (
									<span className={styles.comment}>{item.description}</span>
								) : (
									""
								)}
							</p>
						) : (
							""
						)}
					</Link>
				))}
			</div>
		</div>
	)
}
