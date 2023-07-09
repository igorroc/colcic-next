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

export default function UsersNew() {
	const { token } = useUserToken()
	const { createUser } = useUser({
		token,
		adminOnlyPage: true,
		redirectTo: "/dashboard",
	})
	const router = useRouter()

	const [type, setType] = useState("")
	const [creating, setCreating] = useState(false)
	const [created, setCreated] = useState(false)
	const [email, setEmail] = useState("")
	const [accessToken, setAccessToken] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value as string)
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setCreating(true)

		const form = event.currentTarget

		try {
			const data: TUserSimple = {
				name: form.fullName.value,
				username: form.username.value,
				email: form.email.value,
				type: type,
				profilePhoto: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
			}

			const newUser = await createUser(data, token)

			if (newUser) {
				setAccessToken(newUser.accessToken)
				setCreated(true)
				setEmail(data.email)
				form.reset()
			} else {
				alert("Erro ao criar usuário!")
			}
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
						Agora você pode compartilhar o token de acesso, juntamente com o email, para
						o usuário para que ele possa acessar o sistema.
					</p>
					<p>
						<strong>Token de acesso: </strong>
						{accessToken}
						<br />
						<strong>Email: </strong>
						{email}
					</p>
					<Button label="Voltar" type="primary" onClick={() => router.push("/users")} />
				</>
			) : (
				<>
					<h1>Novo usuário</h1>

					<form action="" id={styles.form} onSubmit={handleSubmit}>
						<TextField label="Nome" type="text" name="fullName" required />
						<TextField label="Username" type="text" name="username" required />
						<TextField label="Email" type="email" name="email" required />
						<FormControl fullWidth required>
							<InputLabel id="label-type">Tipo</InputLabel>
							<Select
								labelId="label-type"
								value={type}
								label="Tipo"
								onChange={handleChange}
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
