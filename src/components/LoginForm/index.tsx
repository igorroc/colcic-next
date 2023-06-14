"use client"
import React from "react"
import TextField from "@mui/material/TextField"
import { Button } from "../Button"
import Link from "next/link"

import styles from "./login-form.module.css"

export default function LoginForm() {
	return (
		<form action="" id={styles.form}>
			<TextField
				id="nome"
				label="Digite seu email ou nome de usuário"
				variant="outlined"
				required
			/>
			<TextField id="senha" label="Digite sua senha" variant="outlined" required />
			<Link href={"/primeiro-acesso"}>Primeiro acesso?</Link>
			<Button label="Entrar" type="primary" className={styles.submit} />
		</form>
	)
}
