"use client"
import React, { useEffect, useState } from "react"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { TPost } from "@/types/post"
import { useUserToken } from "@/utils/handleUserToken"

import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import { Button } from "@/components/Button"
import { Checkbox, ListItemText } from "@mui/material"
import Loading from "@/components/Loading"

import styles from "./settings.module.css"

export default function Settings() {
	const { token } = useUserToken()
	const { user } = useUser({ token, adminOnlyPage: true, redirectTo: "/dashboard" })
	const { getActivePosts, getHomePosts, saveHomePosts } = usePosts()

	const [posts, setPosts] = useState<TPost[]>([])
	const [selectedPosts, setSelectedPosts] = useState<string[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function getData() {
			const posts = await getActivePosts()
			const homePosts = await getHomePosts()

			if (posts) {
				setPosts(posts)
			}

			if (homePosts) {
				homePosts.map((post) => {
					setSelectedPosts((selectedPosts) => [...selectedPosts, post.slug])
				})
			}

			setLoading(false)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleChange = (event: SelectChangeEvent<typeof selectedPosts>) => {
		const {
			target: { value },
		} = event
		setSelectedPosts(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		)
	}

	async function handleSavePosts() {
		try {
			if (selectedPosts.length <= 5) {
				const res = await saveHomePosts(selectedPosts, token)
				if (res) {
					alert("Posts salvos com sucesso!")
				} else {
					alert("Erro ao salvar posts!")
				}
			} else {
				alert("Você só pode selecionar até 5 posts!")
			}
		} catch (error) {
			alert("Erro ao salvar posts!")
		}
	}

	return (
		<div>
			<h1>Configurações</h1>
			{loading ? (
				<Loading />
			) : (
				<div className={styles.flex}>
					<h3>Posts para destaque:</h3>
					{posts.length > 0 ? (
						<>
							<FormControl required>
								<InputLabel id="demo-multiple-checkbox-label">
									Publicações destaque
								</InputLabel>
								<Select
									labelId="demo-multiple-checkbox-label"
									id="demo-multiple-checkbox"
									multiple
									value={selectedPosts}
									onChange={handleChange}
									input={<OutlinedInput label="Publicações destaque" />}
									renderValue={(selected) => {
										return posts
											.map((post) => {
												if (selected.includes(post.slug)) {
													return post.title.split(" ")[0] + "..."
												}
											})
											.filter(Boolean)
											.join(", ")
									}}
								>
									{posts.map((post, index) => (
										<MenuItem key={index} value={post.slug}>
											<Checkbox
												checked={selectedPosts.indexOf(post.slug) > -1}
											/>
											<ListItemText primary={post.title} />
										</MenuItem>
									))}
								</Select>
							</FormControl>
							<Button label="Salvar" type="primary" onClick={handleSavePosts} />
						</>
					) : (
						<div>Carregando...</div>
					)}
				</div>
			)}
		</div>
	)
}
