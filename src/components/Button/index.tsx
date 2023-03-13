import styles from "./button.module.css"

interface ButtonProps {
	/** Button label */
	label: string
	/** Button type */
	type?: "primary" | "secondary"
	/** Button size */
	size?: "small" | "medium" | "large"
	/** Button onClick handler */
	onClick?: () => void
}

export function Button(props: ButtonProps) {
	return (
		<button className={styles.PrimaryButton} onClick={props.onClick}>
			{props.label}
		</button>
	)
}
