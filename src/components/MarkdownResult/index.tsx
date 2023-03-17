import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
// import rehypeRaw from "rehype-raw"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula as styleTheme } from "react-syntax-highlighter/dist/esm/styles/prism"

interface MarkdownResultProps {
	text: string
}

export function MarkdownResult(props: MarkdownResultProps) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkGfm]}
			components={{
				code({ node, inline, className, children, ...props }) {
					const match = /language-(\w+)/.exec(className || "")
					return !inline && match ? (
						<SyntaxHighlighter
							style={styleTheme}
							language={match[1]}
							PreTag="div"
							{...props}
						>
							{String(children).replace(/\n$/, "")}
						</SyntaxHighlighter>
					) : (
						<code className={className} {...props}>
							{children}
						</code>
					)
				},
			}}
		>
			{props.text}
		</ReactMarkdown>
	)
}
