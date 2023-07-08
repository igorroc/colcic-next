import React, { useEffect, useState } from "react"

interface CountdownProps {
	timeInSeconds: number
}

const Countdown: React.FC<CountdownProps> = ({ timeInSeconds }) => {
	const [time, setTime] = useState(timeInSeconds)

	useEffect(() => {
		const timer = setInterval(() => {
			setTime((prevTime) => prevTime - 1)
		}, 1000)

		return () => {
			clearInterval(timer)
		}
	}, [])

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60)
		const seconds = time % 60
		let secondsString = seconds.toString()
		let minutesString = minutes.toString()
		if (minutes == 0) {
			minutesString = ""
		} else if (minutes == 1) {
			minutesString = "1 minuto"
		} else {
			minutesString = `${minutes} minutos`
		}
		if (seconds == 0) {
			secondsString = ""
		} else if (seconds == 1) {
			secondsString = "1 segundo"
		} else {
			secondsString = `${seconds} segundos`
		}

		if (minutes == 0) {
			return secondsString
		} else if (seconds == 0) {
			return minutesString
		} else if (seconds < 0 || minutes < 0) {
			return "breve"
		}
		return `${minutesString} e ${secondsString}`
	}

	return <span>{formatTime(time)}</span>
}

export default Countdown
