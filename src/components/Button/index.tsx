import Link from "next/link"
import styles from "./button.module.css"

interface ButtonProps {
	/** Button label */
	label: string
	/** Button type */
	type: "primary" | "secondary"
	/** Button size */
	size?: "small" | "medium" | "large"
	/** Button onClick handler */
	onClick?: () => void

	/** Button href */
	href?: string
}

export function Button(props: ButtonProps) {
	if (props.href) {
		if (props.href.startsWith("#")) {
			return (
				<a href={props.href} className={styles[props.type]}>
					{props.label}
				</a>
			)
		} else {
			return (
				<Link href={props.href} className={styles[props.type]}>
					{props.label}
				</Link>
			)
		}
	} else {
		return (
			<button className={styles[props.type]} onClick={props.onClick}>
				{props.label}
			</button>
		)
	}
}
