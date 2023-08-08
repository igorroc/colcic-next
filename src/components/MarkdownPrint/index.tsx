"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), { ssr: false })

import styles from "./markdown-print.module.css"

type MarkdownPrintProps = {
	text: string
}

export default function MarkdownPrint(props: MarkdownPrintProps) {
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		setLoading(false)
	}, [])

	if (loading) {
		return (
			<>
				{[...Array(10)].map((_, index) => (
					<span
						className={styles.skeletonText}
						key={index}
						style={
							{
								"--delay": `${index * 0.1}s`,
								"--width": `${Math.floor(Math.random() * (100 - 50 + 1)) + 50}%`,
							} as React.CSSProperties
						}
					></span>
				))}
			</>
		)
	}

	return (
		<MarkdownPreview
			source={props.text}
			wrapperElement={{
				"data-color-mode": "light",
				id: "markdown-preview",
			}}
			style={{
				backgroundColor: "transparent",
			}}
		/>
	)
}
