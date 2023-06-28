import styles from "./primeiroAcessoPage.module.css"

import Image from "next/image"
import PrimeiroAcessoJpg from "/public/primeiroacesso.jpg"
import LogoColcic from "/public/logo.png"
import PrimeiroAcessoForm from "@/components/PrimeiroAcessoForm"
import Link from "next/link"

export const metadata = {
	title: "Primeiro Acesso",
}

export default function Login() {
	return (
		<main className={styles.main}>
			<div className={styles.tela}>
				<div className={styles.mainImage}>
					<Image
						src={PrimeiroAcessoJpg}
						alt={"Primeiro Acesso"}
					/>
				</div>
				<div className={styles.mainContent}>
					<Link href={"/"} className={styles.logo}>
						<Image
							src={LogoColcic}
							alt="Logo do Colegiado de Ciência da Computação da UESC"
						/>
					</Link>
					<h1>Primeiro Acesso</h1>

					<PrimeiroAcessoForm />
				</div>
			</div>
		</main>
	)
}
