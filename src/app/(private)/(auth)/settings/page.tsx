"use client"
import React, { useCallback, useEffect, useState } from "react"
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

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'

import styles from "./settings.module.css"
import DraggablePost from "@/components/DraggablePost"


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

	const movePost = useCallback((dragIndex: number, hoverIndex: number) => {
		setPosts((prevPosts: TPost[]) =>
			update(prevPosts, {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, prevPosts[dragIndex] as TPost],
				],
			}),
		)
	}, [])

	const renderPost = useCallback(
		(post: TPost, index: number) => {
			return (
				<DraggablePost key={post._id} id={post._id} index={index} movePost={movePost} className={styles.pill}>
					<span>
						{index}
					</span>
					{post.title.split(" ").slice(0, 8).join(" ")}...
				</DraggablePost>
			)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[],
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
													return <span key={post._id} className={styles.pill}>
														{post.title.split(" ").slice(0, 3).join(" ")}...
													</span>
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
													const index = selectedPosts.indexOf(post.slug) + 1
													return renderPost(post, index)
												}
											})
											.filter(Boolean)}
									</div>
								) : null}
							</DndProvider>

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
