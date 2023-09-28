"use client"
import React, { useCallback, useEffect, useState } from "react"
import { usePosts } from "@/hooks/posts"
import { TPost } from "@/types/post"
import { useUserToken } from "@/utils/handleUserToken"

import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import { Button } from "@/components/Button"
import { Checkbox, ListItemText } from "@mui/material"

import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import update from "immutability-helper"

import styles from "./settings.module.css"
import DraggablePost from "@/components/DraggablePost"
import { toast } from "react-hot-toast"
import Loading from "@/components/Loading"

export default function Settings() {
	const { token } = useUserToken()
	const { activePosts, homePosts, saveHomePosts } = usePosts()

	const [posts, setPosts] = useState<TPost[]>([])
	const [selectedPosts, setSelectedPosts] = useState<string[]>([])

	const [saving, setSaving] = useState<boolean>(false)

	useEffect(() => {
		if (homePosts) {
			homePosts.map((post) => {
				setSelectedPosts((selectedPosts) => [...selectedPosts, post.slug])
			})
		}
		if (activePosts) {
			setPosts(activePosts)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const movePost = useCallback((dragIndex: number, hoverIndex: number) => {
		setPosts((prevPosts: TPost[]) =>
			update(prevPosts, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevPosts[dragIndex] as TPost],
				],
			})
		)
	}, [])

	const renderPost = useCallback(
		(post: TPost, index: number) => {
			return (
				<DraggablePost
					key={post._id}
					id={post._id}
					index={index}
					movePost={movePost}
					className={styles.pill}
				>
					<span>{index}</span>
					{post.title.split(" ").slice(0, 8).join(" ")}...
				</DraggablePost>
			)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	)

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
		setSaving(true)
		try {
			if (selectedPosts.length <= 5) {
				const res = await saveHomePosts(selectedPosts, token)
				if (res) {
					toast.success("Posts salvos com sucesso!")
				} else {
					toast.error("Erro ao salvar posts!")
				}
			} else {
				toast.error("Você só pode selecionar até 5 posts!")
			}
		} catch (error) {
			toast.error("Erro ao salvar posts!")
		}
		setSaving(false)
	}

	return (
		<div>
			<h1>Configurações</h1>
			{
				<div className={styles.flex}>
					{posts.length > 0 ? (
						<>
							<h3>Posts para destaque:</h3>
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
													return (
														<span
															key={post._id}
															className={styles.pill}
														>
															{post.title
																.split(" ")
																.slice(0, 3)
																.join(" ")}
															...
														</span>
													)
												}
											})
											.filter(Boolean)
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
							<DndProvider backend={HTML5Backend}>
								{selectedPosts.length > 0 ? (
									<div className={styles.selectedPosts}>
										{posts
											.map((post, i) => {
												if (selectedPosts.includes(post.slug)) {
													const index =
														selectedPosts.indexOf(post.slug) + 1
													return renderPost(post, index)
												}
											})
											.filter(Boolean)}
									</div>
								) : null}
							</DndProvider>

							<Button
								label={saving ? "Salvando..." : "Salvar"}
								type="primary"
								onClick={handleSavePosts}
								disabled={saving}
							/>
						</>
					) : (
						<Loading />
					)}
				</div>
			}
		</div>
	)
}
