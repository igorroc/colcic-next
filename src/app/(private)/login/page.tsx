import Image from "next/image"
import Link from "next/link"

import LoginForm from "@/components/LoginForm"

import LoginJpg from "/public/login.jpg"
import LogoColcic from "/public/logo.png"

import styles from "./loginPage.module.css"

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
							<Link href={"/"}>
								<Image
									className={styles.logo}
									src={LogoColcic}
									alt="Logo do Colegiado de Ciência da Computação da UESC"
								/>
							</Link>
							<h1>Login</h1>

							<LoginForm />
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
