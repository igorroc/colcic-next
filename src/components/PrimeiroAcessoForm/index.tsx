"use client"
import React from "react"
import TextField from "@mui/material/TextField"
import { Button } from "../Button"
import Link from "next/link"

import styles from "./primeiro-acesso-form.module.css"

export default function PrimeiroAcessoForm() {
	return (
		<form action="" id={styles.form}>
			<TextField
				id="nome"
				label="Digite seu email ou nome de usuário"
				variant="outlined"
				required
			/>
			<TextField
				id="codigo"
				label="Digite o código que você recebeu"
				variant="outlined"
				required
			/>
			<TextField id="senha" label="Crie sua senha" variant="outlined" required />
			<Link href={"/login"}>Já tenho acesso</Link>
			<Button label="Entrar" type="primary" className={styles.submit} />
		</form>
	)
}
