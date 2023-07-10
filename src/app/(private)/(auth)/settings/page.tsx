"use client"
import React, { useEffect, useState } from "react"
import usePosts from "@/hooks/posts"
import useUser from "@/hooks/users"
import { TPost } from "@/types/post"
import { useUserToken } from "@/utils/handleUserToken"

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import { Button } from "@/components/Button"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

export default function Settings() {
	const { token } = useUserToken()
	const { user } = useUser({ token, adminOnlyPage: true, redirectTo: '/dashboard' })
	const { getPosts } = usePosts()
	const [posts, setPosts] = useState<TPost[]>([])
	const [selectedPosts, setSelectedPosts] = useState<string[]>([]);

	useEffect(() => {
		async function getData() {
			const posts = await getPosts(token)

			if (!posts) return

			setPosts(posts)
		}

		getData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	function handleSelectPosts(event: SelectChangeEvent<any>) {
		const { target: { value } } = event;
		setSelectedPosts(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value,
		);
	}

	function handleSavePosts() {
		// TODO salvar no back o selectedPost sendo um array de string
		try {
			alert("Posts de destaque salvos com sucesso!")
		} catch (error) {
			alert("Erro ao salvar posts!")

		}
	}


	return (
		<div>
			<h1>Configurações</h1>
			<p>Melhores posts</p>
			<h2>Posts para destaque:</h2>
			{posts.length > 0 ?
				<FormControl sx={{ m: 1, width: 600 }} >
					<InputLabel id="best-posts-select">Posts destaque</InputLabel>
					<Select
						labelId="best-posts-select"
						id="best-posts-select"
						multiple
						value={selectedPosts}
						onChange={handleSelectPosts}
						input={<OutlinedInput label="Posts destaque" placeholder="Selecione os posts" />}
						MenuProps={MenuProps}
						style={{ marginBottom: 20 }}
					>
						{posts.map((post) => (
							<MenuItem
								key={post.slug}
								value={post.slug}
							>
								{post.title}
							</MenuItem>
						))}
					</Select>
					<Button label="Salvar post para home" type="primary" onClick={handleSavePosts} />
				</FormControl>
				:
				<div>Carregando...</div>
			}

		</div>
	)
}
