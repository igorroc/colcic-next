"use client"

import React, { useState } from "react"
import { Button } from "@/components/Button"
import {
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material"

import styles from "./new.module.css"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import useUser from "@/hooks/users"
import { TUserSimple } from "@/types/user"
import { useRouter } from "next/navigation"
import { useUserToken } from "@/utils/handleUserToken"
import Link from "next/link"

export default function UsersNew() {
	const { token } = useUserToken()
	const { createUser } = useUser({
		token,
		adminOnlyPage: true,
		redirectTo: "/dashboard",
	})
	const router = useRouter()

	const [creating, setCreating] = useState(false)
	const [created, setCreated] = useState(false)
	const [form, setForm] = useState({
		name: "",
		username: "",
		email: "",
		type: "",
	})
	const [accessToken, setAccessToken] = useState("#")

	const handleSelect = (event: SelectChangeEvent) => {
		setForm({ ...form, type: event.target.value })
	}

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target
		setForm({ ...form, [name]: value })
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setCreating(true)

		const eventForm = event.currentTarget

		try {
			const data: TUserSimple = {
				name: form.name,
				username: form.username,
				email: form.email,
				type: form.type,
				profilePhoto: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
			}

			const newUser = await createUser(data, token)

			if (newUser) {
				setAccessToken(newUser.accessToken)
				eventForm.reset()
			} else {
				alert("Erro ao criar usuário!")
			}
			setCreated(true)
		} catch (err) {
			console.error("COLCIC-ERR", err)
			alert("Erro ao criar usuário!")
		}
		setCreating(false)
	}

	return (
		<div>
			{created ? (
				<>
					<h1>Usuário criado!</h1>
					<p>
						Agora você pode compartilhar a mensagem abaixo, para que o usuário possa
						entrar no sistema:
					</p>
					<p className={styles.copy}>
						Olá, <b>{form.name}</b>
						<br />
						Bem vindo(a) ao COLCIC! <br />
						Para entrar no sistema, use as seguintes credenciais: <br />
						<br />
						<strong>Nome de usuário: </strong>
						{form.username}
						<br />
						<strong>Email: </strong>
						{form.email}
						<br />
						<strong>Token de acesso: </strong>
						{accessToken}
						<br />
						<br />
						Acesse o link abaixo, crie sua senha e comece a criar publicações!
						<br />
						<Link href="/primeiro-acesso">
							{process.env.NEXT_PUBLIC_URL}/primeiro-acesso
						</Link>
					</p>
					<p>
						<i>
							Obs: O token de acesso é <b>único e não pode ser recuperado</b>. Caso o
							usuário perca o token, será necessário criar um novo usuário.
						</i>
					</p>
					<Button label="Voltar" type="primary" onClick={() => router.push("/users")} />
				</>
			) : (
				<>
					<h1>Novo usuário</h1>

					<form action="" id={styles.form} onSubmit={handleSubmit}>
						<TextField
							label="Nome"
							type="text"
							name="name"
							required
							value={form.name}
							onChange={handleChange}
						/>
						<TextField
							label="Username"
							type="text"
							name="username"
							required
							value={form.username}
							onChange={handleChange}
						/>
						<TextField
							label="Email"
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							required
						/>
						<FormControl fullWidth required>
							<InputLabel id="label-type">Tipo</InputLabel>
							<Select
								labelId="label-type"
								value={form.type}
								label="Tipo"
								onChange={handleSelect}
							>
								<MenuItem value={"user"}>Normal</MenuItem>
								<MenuItem value={"admin"}>Admin</MenuItem>
							</Select>
						</FormControl>

						{creating ? (
							<p>Criando usuário...</p>
						) : (
							<Button label="Criar usuário" type="primary" />
						)}
					</form>
				</>
			)}
		</div>
	)
}
