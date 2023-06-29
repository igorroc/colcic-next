"use client"

import dynamic from "next/dynamic"

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), { ssr: false })

type MarkdownPrintProps = {
	text: string
}

export default function MarkdownPrint(props: MarkdownPrintProps) {
	return (
		<MarkdownPreview
			source={props.text}
			wrapperElement={{
				"data-color-mode": "light",
			}}
			style={{
				backgroundColor: "transparent",
			}}
		/>
	)
}
