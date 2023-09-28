"use client"

import React, { useState, useEffect } from "react"
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

import styles from "./edit.module.css"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"
import { useUsers } from "@/hooks/users"
import { TUserSimple } from "@/types/user"
import { useRouter } from "next/navigation"
import { useUserToken } from "@/utils/handleUserToken"
import { IoClose } from "react-icons/io5"
import Loading from "@/components/Loading"
import { useAuth } from "@/components/AuthProvider"
import { toast } from "react-hot-toast"

interface UserEditProps {
	params: {
		id: string
	}
}

export default function UserEdit({ params }: UserEditProps) {
	const { authUser } = useAuth()
	const { token } = useUserToken()
	const { getUserById, editUser } = useUsers()
	const router = useRouter()

	const [type, setType] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [editing, setEditing] = useState(false)
	const [fullName, setFullName] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [photo, setPhoto] = useState("")
	const [photoError, setPhotoError] = useState(false)

	useEffect(() => {
		async function getData() {
			const user = await getUserById(params.id)
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
	}, [params.id])

	const handleChange = (event: SelectChangeEvent) => {
		setType(event.target.value as string)
	}

	const handleClickShowPassword = () => setShowPassword((show) => !show)

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setEditing(true)

		const form = event.currentTarget

		const data: TUserSimple = {
			name: form.fullName.value,
			username: form.username.value,
			email: form.email.value,
			password: form.password.value,
			type: type,
			profilePhoto: photo,
		}

		const newUser = await editUser(data, params.id, token)

		if (newUser) {
			toast.success("Usuário editado com sucesso!")
			form.reset()
			router.push("/users")
		} else {
			toast.error("Erro ao editar usuário!")
		}

		setEditing(false)
	}

	function handlePhotoError() {
		setPhotoError(true)
	}

	return (
		<div>
			<h1>Editar usuário</h1>
			{authUser && "type" in authUser && authUser?.type === "admin" ? (
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
						label="Nova senha"
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
									<div
										className={styles.photoError}
										title="Erro ao carregar foto"
									>
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

					<Button
						label={editing ? "Editando usuário..." : "Editar usuário"}
						type="primary"
						disabled={editing}
					/>
				</form>
			) : (
				<Loading />
			)}
		</div>
	)
}
