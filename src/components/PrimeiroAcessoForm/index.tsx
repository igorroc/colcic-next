"use client"
import React from "react"
import TextField from "@mui/material/TextField"
import { Button } from "../Button"
import Link from "next/link"

import styles from "./primeiro-acesso-form.module.css"
import { useUsers } from "@/hooks/users"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

export default function PrimeiroAcessoForm() {
	const router = useRouter()
	const { handleFirstAccess } = useUsers()
	const [loggingIn, setLoggingIn] = React.useState(false)

	const [values, setValues] = React.useState({
		identifier: "",
		accessCode: "",
		password: "",
	})

	const handleChange =
		(prop: keyof typeof values) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value })
		}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		setLoggingIn(true)
		event.preventDefault()

		const userIsLogged = await handleFirstAccess(
			values.identifier,
			values.password,
			values.accessCode
		)

		if (userIsLogged) {
			toast.success("Agora você pode fazer login!")
			router.push("/login")
		} else {
			toast.error("Erro entrar, tente novamente")
			setValues({
				identifier: "",
				accessCode: "",
				password: "",
			})
		}

		setLoggingIn(false)
	}

	const error = values.accessCode.length != 8 || !values.accessCode.startsWith("#")

	return (
		<form action="" id={styles.form} onSubmit={handleSubmit}>
			<TextField
				id="identifier"
				label="Digite seu email ou nome de usuário"
				variant="outlined"
				value={values.identifier}
				onChange={handleChange("identifier")}
				required
			/>
			<TextField
				id="accessCode"
				label="Digite o código que você recebeu"
				variant="outlined"
				value={values.accessCode}
				onChange={handleChange("accessCode")}
				required
				helperText={
					values.accessCode != "" &&
					error &&
					"Código inválido: deve começar com # e ter 8 caracteres"
				}
				error={values.accessCode != "" && error}
			/>
			<TextField
				id="password"
				label="Crie sua senha"
				variant="outlined"
				type="password"
				required
				value={values.password}
				onChange={handleChange("password")}
			/>
			<Link href={"/login"}>Já tenho acesso</Link>
			<Button
				label={loggingIn ? "Entrando..." : "Entrar"}
				type="primary"
				className={styles.submit}
				disabled={loggingIn}
			/>
		</form>
	)
}
