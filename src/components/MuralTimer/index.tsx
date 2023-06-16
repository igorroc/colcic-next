"use client"

import { useEffect, useState } from "react"
import styles from "./mural_timer.module.css"

type MuralTimerProps = {
	delay: number
}

export default function MuralTimer(props: MuralTimerProps) {
	const [width, setWidth] = useState(0)
	const fps = 10
	const passo = (fps * 100) / props.delay

	useEffect(() => {
		const interval = setInterval(() => {
			setWidth((prevWidth) => {
				if (prevWidth >= 100) {
					return 0
				}

				return prevWidth + passo
			})
		}, 100)

		return () => clearTimeout(interval)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.timer}>
			<div
				className={styles.timerBar}
				style={{
					width: `${width}%`,
				}}
			></div>
		</div>
	)
}
