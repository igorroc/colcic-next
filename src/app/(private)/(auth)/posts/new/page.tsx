"use client"

import React, { useEffect, useState } from "react"
import {
	Checkbox,
	FormControl,
	FormHelperText,
	Input,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	TextField,
} from "@mui/material"

import styles from "./page.module.css"
import { Button } from "@/components/Button"
import BasicDatePicker from "@/components/DatePicker"
import usePosts from "@/hooks/posts"
import { useUserToken } from "@/utils/handleUserToken"
import { PostType, TPostToPublish } from "@/types/post"
import slugCleaner from "@/utils/slugCleaner"

const publishTypes = ["Site", "Mural"]

export default function Editor() {
	const { createPost } = usePosts()
	const { token } = useUserToken()

	const maxDescriptionLength = 100

	const [title, setTitle] = useState("")
	const [slug, setSlug] = useState("")
	const [hasEditedSlug, setHasEditedSlug] = useState(false)
	const [description, setDescription] = useState("")
	const [publiType, setPubliType] = useState<string[]>([])
	const [bannerH, setBannerH] = useState("")
	const [bannerV, setBannerV] = useState("")
	const [categories, setCategories] = useState("")
	const [expirationDate, setExpirationDate] = useState<Date | null>(null)
	const [body, setBody] = useState("")

	const handleChange = (event: SelectChangeEvent<typeof publiType>) => {
		const {
			target: { value },
		} = event
		setPubliType(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		)
	}

	useEffect(() => {
		if (title.length === 0) {
			setSlug("")
			setHasEditedSlug(false)
			return
		}
		if (hasEditedSlug) return
		setSlug(slugCleaner(title))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [title, hasEditedSlug])

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const data: TPostToPublish = {
			title,
			// slug,
			// description,
			// bannerH,
			// bannerV,
			category: categories.split(" "),
			types: publiType as PostType[],
			expirationDate: expirationDate || new Date(),
			body,
			status: "pending",
			activationDate: new Date(),
		}

		const res = await createPost(data, token)

		console.log("submit", res)
	}
	return (
		<div>
			<h1>Criar publicação</h1>
			<form action="" id={styles.form} onSubmit={handleSubmit}>
				<TextField
					label="Título"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<FormControl variant="outlined" required>
					<InputLabel htmlFor="component-helper">Slug</InputLabel>
					<OutlinedInput
						id="component-helper"
						value={slug}
						label="Slug"
						onChange={(e) => {
							setHasEditedSlug(true)

							setSlug(slugCleaner(e.target.value))
						}}
						multiline
					/>
					<FormHelperText id="component-helper-text">
						Slug é o nome que aparece na URL da publicação
					</FormHelperText>
				</FormControl>
				<FormControl
					error={description.length > maxDescriptionLength}
					variant="outlined"
					required
				>
					<InputLabel htmlFor="component-helper">Descrição</InputLabel>
					<OutlinedInput
						id="component-helper"
						value={description}
						label="Descrição"
						onChange={(e) => setDescription(e.target.value)}
						multiline
					/>
					<FormHelperText id="component-helper-text">
						Caracteres restantes: {maxDescriptionLength - description.length}
					</FormHelperText>
				</FormControl>
				<TextField
					label="Conteúdo"
					multiline
					minRows={5}
					maxRows={10}
					value={body}
					onChange={(e) => setBody(e.target.value)}
					required
				/>
				<FormControl required>
					<InputLabel id="demo-multiple-checkbox-label">Tipo de Postagem</InputLabel>
					<Select
						labelId="demo-multiple-checkbox-label"
						id="demo-multiple-checkbox"
						multiple
						value={publiType}
						onChange={handleChange}
						input={<OutlinedInput label="Tipo de Postagem" />}
						renderValue={(selected) => selected.join(", ")}
					>
						{publishTypes.map((publishType) => (
							<MenuItem key={publishType} value={publishType}>
								<Checkbox checked={publiType.indexOf(publishType) > -1} />
								<ListItemText primary={publishType} />
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<FormControl variant="outlined">
					<InputLabel htmlFor="categories">Categorias</InputLabel>
					<OutlinedInput
						id="categories"
						value={categories}
						label="Categorias"
						onChange={(e) => setCategories(e.target.value)}
					/>
					<FormHelperText id="categories-text">
						Categorias separadas por espaço
					</FormHelperText>
				</FormControl>
				<BasicDatePicker
					label="Data de expiração"
					helperText="A notícia será removida do site após essa data"
					value={expirationDate}
					onChange={(newValue) => setExpirationDate(newValue)}
				/>
				<div className={styles.bannerPreview}>
					<FormControl variant="outlined" required>
						<InputLabel htmlFor="banner-H">Banner Horizontal</InputLabel>
						<OutlinedInput
							id="banner-H"
							value={bannerH}
							label="Banner Horizontal"
							onChange={(e) => setBannerH(e.target.value)}
						/>
						<FormHelperText id="banner-H-text">
							<p>
								Você deve colocar um link para a imagem que ficará no topo da
								publicação (exemplo: https://colcic.uesc.br/assets/banner.png)
							</p>
							<p>Recomendamos o tamanho (1920x1080)</p>
						</FormHelperText>
					</FormControl>
					{bannerH && (
						<div className={styles.bannerPreview}>
							{/* eslint-disable-next-line  */}
							<img src={bannerH} alt="Banner" />
						</div>
					)}
				</div>
				<Button label="Publicar" type="primary" />
			</form>
		</div>
	)
}
