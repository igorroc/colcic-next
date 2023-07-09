"use client"

import { useUserToken } from "@/utils/handleUserToken"
import useUser from "@/hooks/users"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/Button"
import { TextField, InputAdornment, IconButton } from "@mui/material"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import styles from "./settings.module.css"
import { useRouter } from "next/navigation"
import { TUserSimple } from "@/types/user"
import { IoClose } from "react-icons/io5"

export default function Profile() {
	const router = useRouter()
	const { token } = useUserToken()
	const { user, editUser } = useUser({ token })

	const [type, setType] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [creating, setCreating] = useState(false)
	const [fullName, setFullName] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [photo, setPhoto] = useState("")
	const [photoError, setPhotoError] = useState(false)

	useEffect(() => {
		async function getData() {
			if (user) {
				setFullName(user.name)
				setUsername(user.username)
				setEmail(user.email)
				setType(user.type)
				setPhoto(user.profilePhoto)
			}
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

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
			profilePhoto: photo,
		}

		if (user) {
			const newUser = await editUser(data, user._id, token)

			if (newUser) {
				alert("Perfil editado com sucesso!")
				form.reset()
				router.push("/users")
			} else {
				alert("Erro ao editar perfil!")
			}
		}
		setCreating(false)
	}

	function handlePhotoError() {
		setPhotoError(true)
	}

	return (
		<div>
			<h1>Editar perfil</h1>

			<form action="" id={styles.form} onSubmit={handleSubmit}>
				<TextField
					label="Nome"
					type="text"
					name="fullName"
					required
					value={fullName}
					onChange={(event) => setFullName(event.target.value)}
				/>
				<TextField
					label="Username"
					type="text"
					name="username"
					required
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<TextField
					label="Email"
					type="email"
					name="email"
					required
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>
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
				<div className={styles.flexRow}>
					{photo && (
						<div className={styles.profilePhoto}>
							{photoError ? (
								<div className={styles.photoError} title="Erro ao carregar foto">
									<IoClose size={32} />
								</div>
							) : (
								<>
									{/* eslint-disable-next-line  */}
									<img
										src={photo}
										alt="Foto de perfil"
										onError={handlePhotoError}
									/>
								</>
							)}
						</div>
					)}
					{/* <input
						type="file"
						name="photo"
						id="photo"
						value={photo}
						onChange={(event) => {
							setPhotoError(false)
							setPhoto(event.target.value)
						}}
					/> */}
					<TextField
						label="Foto de perfil"
						type="url"
						name="photo"
						required
						value={photo}
						className={styles.photoInput}
						onChange={(event) => {
							setPhotoError(false)
							setPhoto(event.target.value)
						}}
					/>
				</div>

				{creating ? (
					<p>Editando perfil...</p>
				) : (
					<Button label="Editar usuário" type="primary" />
				)}
			</form>
		</div>
	)
}
