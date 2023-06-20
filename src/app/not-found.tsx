import React from "react"
import Image from "next/image"

import styles from "./notFound.module.css"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/Button"

import img404 from "/public/404.png"

export const metadata = {
	title: "Página não encontrada",
	description: "Página não encontrada",
}

export default function NotFound() {
	return (
		<>
			<Header />
			<div className={styles.mainContainer}>
				<div className={styles.error}>
					<div className={styles.errorContent}>
						<span>OPS....</span>
						<h2>
							Algo de errado
							<br />
							<b>aconteceu</b>
						</h2>
						<p>
							A página que você solicitou não foi encontrada. Você tem certeza que
							está no caminho certo?
						</p>
						<Button label="Voltar para o início" type="primary" href="/" />
					</div>
					<div className={styles.errorImage}>
						<Image src={img404} alt="Página não encontrada" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}
