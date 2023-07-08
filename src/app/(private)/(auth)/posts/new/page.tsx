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

const publishTypes = ["Site", "Mural"]

export default function Editor() {
	const [title, setTitle] = useState("")
	const [slug, setSlug] = useState("")
	const [hasEditedSlug, setHasEditedSlug] = useState(false)
	const [description, setDescription] = useState("")
	const [publiType, setPubliType] = useState<string[]>([])
	const [bannerH, setBannerH] = useState("")
	const [bannerV, setBannerV] = useState("")
	const maxDescriptionLength = 100

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
		setSlug(title.toLowerCase().replace(/ /g, "-"))
	}, [title, hasEditedSlug])

	return (
		<div>
			<h1>Criar publicação</h1>
			<form action="" id={styles.form}>
				<TextField
					label="Título"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<FormControl variant="outlined">
					<InputLabel htmlFor="component-helper">Slug</InputLabel>
					<OutlinedInput
						id="component-helper"
						value={slug}
						label="Slug"
						onChange={(e) => {
							setHasEditedSlug(true)
							setSlug(e.target.value)
						}}
						multiline
					/>
					<FormHelperText id="component-helper-text">
						Slug é o nome que aparece na URL da publicação
					</FormHelperText>
				</FormControl>
				<div>
					<TextField
						label="Banner"
						value={bannerH}
						onChange={(e) => setBannerH(e.target.value)}
					/>
					{/* eslint-disable-next-line  */}
					{bannerH && <img src={bannerH} alt="Banner" width={100} height={100} />}
				</div>
				<FormControl error={description.length > maxDescriptionLength} variant="outlined">
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
				<FormControl>
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
			</form>
		</div>
	)
}
