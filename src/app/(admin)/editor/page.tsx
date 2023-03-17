"use client"

import { MarkdownResult } from "@/components/MarkdownResult"
import React from "react"

export default function Editor() {
	const [text, setText] = React.useState("")

	return (
		<div
			style={{
				margin: "0 auto",
				width: "60vw",
				display: "flex",
				flexDirection: "column",
				gap: 20,
			}}
		>
			<h1>Markdown</h1>
			<textarea
				name="markdown"
				id="markdown"
				cols={20}
				rows={20}
				value={text}
				onChange={(e) => {
					setText(e.target.value)
				}}
				style={{ padding: "1rem" }}
			></textarea>
			<div id="markdownResult">
				<MarkdownResult text={text} />
			</div>
		</div>
	)
}
