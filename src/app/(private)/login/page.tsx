import styles from "./loginPage.module.css"

import Image from "next/image"
import LoginForm from "@/components/LoginForm"
import LoginJpg from "/public/login.jpg" // Caminho corrigido para 'login.jpg'
import LogoColcic from "/public/logo.png" // Caminho corrigido para 'login.jpg'

export const metadata = {
	title: "Login",
}

export default function Login() {
	return (
		<main>
			<div className={styles.background}>
				<div className={styles.container}>
					<div className={styles.tela}>
						<Image className={styles.image} src={LoginJpg} alt={"Login"} />

						<div className={styles.mainContent}>
							<Image
								className={styles.logo}
								src={LogoColcic}
								alt="Logo do Colegiado de Ciência da Computação da UESC"
							/>
							<h1>Login</h1>

							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
