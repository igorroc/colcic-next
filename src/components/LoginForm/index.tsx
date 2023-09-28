"use client"

import React, { useEffect } from "react"
import TextField from "@mui/material/TextField"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { useUsers } from "@/hooks/users"

import styles from "./login-form.module.css"

import { Button } from "../Button"
import { useUserToken } from "@/utils/handleUserToken"

import { toast } from "react-hot-toast"

export default function LoginForm() {
	const router = useRouter()
	const [userName, setUserName] = React.useState("")
	const [password, setPassword] = React.useState("")
	const { token, setUserToken } = useUserToken()
	const { handleUserLogin } = useUsers()
	const [loading, setLoading] = React.useState(false)

	useEffect(() => {
		if (token) {
			setLoading(true)
			router.push("/dashboard")
			toast.success("Entrando...")
		}
	}, [token, router])

	async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		setLoading(true)
		e.preventDefault()
		const userIsLogged = await handleUserLogin(userName, password)

		if (userIsLogged && "token" in userIsLogged) {
			toast.success("Login efetuado com sucesso")
			setUserToken(userIsLogged.token)
			router.push("/dashboard")
		} else {
			toast.error("Usuário ou senha incorretos")
			setLoading(false)
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
				disabled={loading}
			/>
			<TextField
				id="senha"
				label="Digite sua senha"
				variant="outlined"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
				disabled={loading}
			/>
			<Link href={"/primeiro-acesso"}>Primeiro acesso?</Link>
			<Button
				label={loading ? "Entrando..." : "Entrar"}
				type="primary"
				className={styles.submit}
				disabled={loading}
			/>
		</form>
	)
}
