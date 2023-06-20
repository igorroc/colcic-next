"use client"

import React from "react"
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { FiLink2 } from "react-icons/fi"

import styles from "./sharableLinks.module.css"

export default function SharableLinks() {
	function copy(type: string) {
		console.log(type)
		const url = window.location.href
		switch (type) {
			case "link":
				navigator.clipboard.writeText(url)
				break
			case "whatsapp":
				window.open(
					`https://api.whatsapp.com/send?text=${url}`,
					"_blank",
					"noopener noreferrer"
				)
				break
			case "linkedin":
				window.open(
					`https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
					"_blank",
					"noopener noreferrer"
				)
				break
			case "twitter":
				window.open(
					`https://twitter.com/intent/tweet?url=${url}`,
					"_blank",
					"noopener noreferrer"
				)
				break
		}
	}
	return (
		<div className={styles.socialMediaIconsContainer}>
			<div className={styles.iconContainer} onClick={() => copy("link")}>
				<FiLink2 size={22} />
			</div>
			<div className={styles.iconContainer} onClick={() => copy("whatsapp")}>
				<AiOutlineWhatsApp size={24} />
			</div>
			<div className={styles.iconContainer} onClick={() => copy("linkedin")}>
				<FaLinkedinIn size={24} />
			</div>
			<div className={styles.iconContainer} onClick={() => copy("twitter")}>
				<AiOutlineTwitter size={24} />
			</div>
		</div>
	)
}
