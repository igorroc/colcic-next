"use client"

import React, { useState } from "react"
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
import defaultBody from "@/utils/defaultPostBody"

const publishTypes = ["Site", "Mural"]

export default function Editor() {
	const [description, setDescription] = useState("")
	const [publiType, setPubliType] = useState<string[]>([])
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

	return (
		<div>
			<h1>Criar publicação</h1>
			<form action="" id={styles.form}>
				<TextField label="Título" />
				<TextField label="Banner" />
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
				<FormControl >
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
