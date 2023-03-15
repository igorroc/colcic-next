"use client"

import React from "react"

import { MdArrowUpward } from "react-icons/md"

import styles from "./gotop.module.css"

export function GoTop() {
	const [show, setShow] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	})

	const handleScroll = () => {
		if (window.pageYOffset > 200) {
			setShow(true)
		} else {
			setShow(false)
		}
	}

	return (
		<a id={styles.goToTop} href="#top" data-hide={!show}>
			<MdArrowUpward />
		</a>
	)
}
