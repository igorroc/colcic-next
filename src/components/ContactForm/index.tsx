"use client"
import React from "react"
import TextField from "@mui/material/TextField"
import { Button } from "../Button"

import styles from "./contact-form.module.css"

export default function ContactForm() {
	return (
		<form action="" id={styles.form}>
			<TextField id="nome" label="Nome" variant="outlined" required />
			<TextField id="email" label="Email" variant="outlined" type="email" required />
			<TextField id="assunto" label="Assunto" variant="outlined" required />
			<TextField
				id="mensagem"
				label="Mensagem"
				variant="outlined"
				multiline
				rows={3}
				required
			/>

			<Button label="Enviar" type="primary" className={styles.submit} />
		</form>
	)
}
