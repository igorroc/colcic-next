"use client"

import React from "react"
import TextField from "@mui/material/TextField"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { handleUserLogin } from "@/hooks/users"

import styles from "./login-form.module.css"

import { Button } from "../Button"

export default function LoginForm() {
	const [userName, setUserName] = React.useState("")
	const [password, setPassword] = React.useState("")
	const router = useRouter()

	function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const userIsLogged = handleUserLogin(userName, password)

		if (userIsLogged) {
			router.push("/dashboard")
		} else {
			alert("Usuário ou senha incorretos")
		}
	}

	return (
		<form onSubmit={handleLogin} id={styles.form}>
			<TextField
				id="nome"
				label="Digite seu email ou nome de usuário"
				variant="outlined"
				type="text"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
				required
			/>
			<TextField
				id="senha"
				label="Digite sua senha"
				variant="outlined"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<Link href={"/primeiro-acesso"}>Primeiro acesso?</Link>
			<Button label="Entrar" type="primary" className={styles.submit} />
		</form>
	)
}
