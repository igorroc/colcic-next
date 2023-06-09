"use client"

import React, { useEffect } from "react"
import TextField from "@mui/material/TextField"
import Link from "next/link"
import { useRouter } from "next/navigation"

import useUser from "@/hooks/users"

import styles from "./login-form.module.css"

import { Button } from "../Button"
import { useUserToken } from "@/utils/handleUserToken"

export default function LoginForm() {
	const [userName, setUserName] = React.useState("")
	const [password, setPassword] = React.useState("")
	const router = useRouter()
	const { setUserToken, token } = useUserToken()
	const { handleUserLogin } = useUser()

	useEffect(() => {
		if (token) {
			router.push("/dashboard")
		}
	}, [token, router])

	async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const userIsLogged = await handleUserLogin(userName, password)

		if (userIsLogged) {
			setUserToken(userIsLogged.token)
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
