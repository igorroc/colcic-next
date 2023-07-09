"use client"
import React from "react"
import TextField from "@mui/material/TextField"
import { Button } from "../Button"
import Link from "next/link"

import styles from "./primeiro-acesso-form.module.css"
import useUser from "@/hooks/users"
import { useRouter } from "next/navigation"

export default function PrimeiroAcessoForm() {
	const { handleFirstAccess } = useUser()
	const router = useRouter()

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
		event.preventDefault()

		const userIsLogged = await handleFirstAccess(
			values.identifier,
			values.password,
			values.accessCode
		)

		if (userIsLogged) {
			alert("Agora você pode fazer login!")
			router.push("/login")
		} else {
			alert("Erro entrar, tente novamente")
			setValues({
				identifier: "",
				accessCode: "",
				password: "",
			})
		}
	}

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
			<Button label="Entrar" type="primary" className={styles.submit} />
		</form>
	)
}
