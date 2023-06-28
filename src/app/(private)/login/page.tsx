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
		<main className={styles.main}>
			<div className={styles.tela}>
				<div className={styles.mainImage}>
					<Image src={LoginJpg} alt={"Login"} />
				</div>

				<div className={styles.mainContent}>
					<Link href={"/"} className={styles.logo}>
						<Image
							src={LogoColcic}
							alt="Logo do Colegiado de Ciência da Computação da UESC"
						/>
					</Link>
					<h1>Login</h1>

					<LoginForm />
				</div>
			</div>
		</main>
	)
}
