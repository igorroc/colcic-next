import React from "react"

import styles from "./loading.module.css"

export default function Loading() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.ldsGrid}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
