import styles from "./mural_timer.module.css"

type MuralTimerProps = {
	delay: number
}

export default function MuralTimer(props: MuralTimerProps) {
	return (
		<div className={styles.timer}>
			<div
				className={styles.timerBar}
				style={{ "--delay": `${props.delay}ms` } as React.CSSProperties}
			></div>
		</div>
	)
}
