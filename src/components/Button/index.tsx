import Link from "next/link"
import styles from "./button.module.css"

interface ButtonProps {
	/** Button label */
	label: string
	/** Button type */
	type: "primary" | "secondary" | "danger"
	/** Button size */
	size?: "small" | "medium" | "large"
	/** Button onClick handler */
	onClick?: () => void

	/** Button href */
	href?: string

	/** Button className */
	className?: string

	/** Button disabled */
	disabled?: boolean
}

export function Button(props: ButtonProps) {
	if (props.href) {
		if (props.href.startsWith("#")) {
			return (
				<a href={props.href} className={[styles[props.type], props.className].join(" ")}>
					<span>{props.label}</span>
				</a>
			)
		} else {
			return (
				<Link href={props.href} className={[styles[props.type], props.className].join(" ")}>
					<span>{props.label}</span>
				</Link>
			)
		}
	} else {
		return (
			<button
				className={[styles[props.type], props.className].join(" ")}
				onClick={props.onClick}
				disabled={props.disabled}
			>
				<span>{props.label}</span>
			</button>
		)
	}
}
