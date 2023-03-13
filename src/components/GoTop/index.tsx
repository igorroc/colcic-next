"use client"

import Link from "next/link"
import React from "react"

import { MdArrowUpward } from "react-icons/md"

import styles from "./gotop.module.css"

export default function GoTop() {
	const [show, setShow] = React.useState(true)

	return (
		<Link id={styles.goToTop} href="#top" className={!show ? "hide" : ""}>
			<MdArrowUpward />
		</Link>
	)
}
