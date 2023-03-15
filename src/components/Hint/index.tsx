import React from "react"

import styles from "./hint.module.css"

interface HintProps {
	desktop?: string
	mobile?: string
}

export default function Hint(props: HintProps) {
	return (
		<>
			<p className={styles.hint}>{props.desktop}</p>
			<p className={[styles.hint, styles.mobile].join(" ")}>{props.mobile}</p>
		</>
	)
}
