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
	const [showPassword, setShowPassword] = useState(false)
	const [creating, setCreating] = useState(false)

	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value as string)
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setCreating(true)

		const form = event.currentTarget

		const data: TUserSimple = {
			name: form.fullName.value,
			username: form.username.value,
			email: form.email.value,
			password: form.password.value,
			type: type,
			profilePhoto: "https://img.freepik.com/free-icon/user_318-563642.jpg?w=360",
		}

		const newUser = await createUser(data, token)

		if (newUser) {
			alert("Usuário criado com sucesso!")
			form.reset()
			router.push("/users")
		} else {
			alert("Erro ao criar usuário!")
		}
		setCreating(false)
	}

	return (
		<div>
			<h1>Novo usuário</h1>
			<form action="" id={styles.form} onSubmit={handleSubmit}>
				<TextField label="Nome" type="text" name="fullName" required />
				<TextField label="Username" type="text" name="username" required />
				<TextField label="Email" type="email" name="email" required />
				<TextField
					label="Senha"
					type={showPassword ? "text" : "password"}
					name="password"
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
								>
									{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
								</IconButton>
							</InputAdornment>
						),
					}}
					required
				/>
				<FormControl fullWidth required>
					<InputLabel id="label-type">Tipo</InputLabel>
					<Select labelId="label-type" value={type} label="Tipo" onChange={handleChange}>
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
		</div>
	)
}
