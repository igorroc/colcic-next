import { useQRCode } from "next-qrcode"
import React from "react"

import Logo from "/public/favicon_bg.png"

import styles from "./qrCode.module.css"

type QRCodeProps = {
	text: string
}

export default function QRCode(props: QRCodeProps) {
	const { Canvas } = useQRCode()

	const link = props.text

	return (
		<div className={styles.qrCode}>
			<Canvas
				text={link}
				logo={{
					src: Logo.src,
					options: {
						width: 40,
					},
				}}
				options={{
					level: "M",
					margin: 3,
					scale: 4,
					width: 200,
					color: {
						dark: "#000",
						light: "#fff",
					},
				}}
			/>
		</div>
	)
}
