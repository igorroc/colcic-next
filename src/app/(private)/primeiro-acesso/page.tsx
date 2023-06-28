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
		<main>
			<div className={styles.background}>
				<div className={styles.container}>
					<div className={styles.tela}>
						<Image
							className={styles.image}
							src={PrimeiroAcessoJpg}
							alt={"Primeiro Acesso"}
						/>

						<div className={styles.mainContent}>
							<Link href={"/"}>
								<Image
									className={styles.logo}
									src={LogoColcic}
									alt="Logo do Colegiado de Ciência da Computação da UESC"
								/>
							</Link>
							<h1>Primeiro Acesso</h1>

							<PrimeiroAcessoForm />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
