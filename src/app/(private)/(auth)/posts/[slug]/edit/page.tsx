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

import previewSiteStyles from "@/app/(public)/noticias/[slug]/page.module.css"
import previewMuralStyles from "@/components/MuralPostList/MuralPost/muralPost.module.css"

import { Button } from "@/components/Button"
import BasicDatePicker from "@/components/DatePicker"
import { usePosts } from "@/hooks/posts"
import { useUserToken } from "@/utils/handleUserToken"
import { PostType, TCategory, TPostToPublish } from "@/types/post"
import slugCleaner from "@/utils/slugCleaner"
import { useUsers } from "@/hooks/users"
import { TUser } from "@/types/user"
import { useRouter } from "next/navigation"
import LikeButton from "@/components/LikeButton"
import SharableLinks from "@/components/SharableLinks"
import { formatToDate } from "@/utils/formatToDate"
import MarkdownPrint from "@/components/MarkdownPrint"
import QRCode from "@/components/QRCode"
import Loading from "@/components/Loading"
import { useAuth } from "@/components/AuthProvider"
import { toast } from "react-hot-toast"

const publishTypes: PostType[] = ["site", "mural"]

interface PostEditProps {
	params: {
		slug: string
	}
}

export default function PostEdit({ params }: PostEditProps) {
	const { authUser } = useAuth()
	const { token } = useUserToken()
	const { editPost, getPostBySlug } = usePosts()
	const [user, setUser] = useState<TUser>()
	const router = useRouter()

	const maxDescriptionLength = 300

	const [loading, setLoading] = useState(true)

	const [title, setTitle] = useState("")
	const [slug, setSlug] = useState("")
	const [oldSlug, setOldSlug] = useState("")
	const [hasEditedSlug, setHasEditedSlug] = useState(false)
	const [description, setDescription] = useState("")
	const [publicationType, setPublicationType] = useState<string[]>([])
	const [bannerH, setBannerH] = useState("")
	const [bannerV, setBannerV] = useState("")
	const [categories, setCategories] = useState("")
	const [expirationDate, setExpirationDate] = useState<Date | null>(null)
	const [body, setBody] = useState("")
	const [isPreview, setIsPreview] = useState(false)
	const [previewPage, setPreviewPage] = useState("site")

	const handleChange = (event: SelectChangeEvent<typeof publicationType>) => {
		const {
			target: { value },
		} = event
		setPublicationType(
			// On autofill we get a stringified value.
			typeof value === "string" ? value.split(",") : value
		)
	}

	useEffect(() => {
		async function fetchPost() {
			const post = await getPostBySlug(params.slug)

			if (post) {
				if (post.title) setTitle(post.title)
				if (post.slug) {
					setSlug(post.slug)
					setOldSlug(post.slug)
				}
				if (post.description) setDescription(post.description)
				if (post.types) setPublicationType(post.types)
				if (post.horizontal_image) setBannerH(post.horizontal_image)
				if (post.vertical_image) setBannerV(post.vertical_image)
				if (post.categories) setCategories(post.categories.join(","))
				if (post.body) setBody(post.body)
			}

			setLoading(false)
		}

		fetchPost()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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

	useEffect(() => {
		if (!publicationType.includes("mural")) {
			setBannerV(bannerH)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bannerH, publicationType])

	async function handleSubmit() {
		if (!authUser) return

		if (!("_id" in authUser)) return

		const data: TPostToPublish = {
			title,
			slug,
			description,
			horizontal_image: bannerH,
			vertical_image: bannerV,
			categories: categories.split(","),
			types: publicationType as PostType[],
			expirationDate: expirationDate || new Date(),
			body,
			author_id: authUser._id,
		}

		const res = await editPost(data, token, oldSlug)

		if (res && res.slug) {
			const confirmation = await confirm("Postagem editada com sucesso! Deseja visualizar?")

			if (confirmation) {
				toast.success("Acessando postagem")
				router.push(`/noticias/${res.slug}`)
			} else {
				toast.success("Acessando lista de postagens")
				router.push(`/posts/`)
			}
		} else {
			toast.error("Erro ao editar postagem")
		}
	}

	function handlePreview() {
		setIsPreview(!isPreview)
	}

	function handlePreviewChange() {
		setPreviewPage(previewPage === "site" ? "mural" : "site")
	}

	if (isPreview) {
		return (
			<div>
				<div className={styles.rowTitle}>
					<h1>Pré-visualizar</h1>
					{publicationType.includes("mural") && (
						<Button
							onClick={handlePreviewChange}
							label={`Visualizar no ${previewPage === "site" ? "mural" : "site"}`}
							type="secondary"
						/>
					)}
				</div>

				{loading ? (
					<Loading />
				) : (
					<>
						{previewPage === "site" && (
							<div>
								<div className={previewSiteStyles.postHeader}>
									<div
										className={[
											previewSiteStyles.sideHeaderContainer,
											previewSiteStyles.leftSideHeaderContainer,
										].join(" ")}
									>
										{categories && (
											<div className={previewSiteStyles.categories}>
												{categories
													.split(",")
													.map((category: TCategory, index: number) => (
														<span
															className={
																previewSiteStyles.categoriesTag
															}
															key={index}
														>
															{category}
														</span>
													))}
											</div>
										)}
										<h1 className={previewSiteStyles.postHeaderTitle}>
											{title}
										</h1>
									</div>
									<div className={previewSiteStyles.sideHeaderContainer}>
										{authUser && !("error" in authUser) && (
											<div className={previewSiteStyles.avatarUserInfo}>
												{/* eslint-disable-next-line */}
												<img
													src={authUser.profilePhoto}
													alt={`Foto de perfil de ${authUser.name}`}
													width={100}
													height={100}
												/>
												<div>
													<p className={previewSiteStyles.authorName}>
														{authUser.name}
													</p>
													<p className={previewSiteStyles.postDate}>
														{new Date().toDateString()}
													</p>
												</div>
											</div>
										)}
										<SharableLinks />
										<LikeButton isPreview />
									</div>
								</div>
								<div className={previewSiteStyles.postBanner}>
									{/* eslint-disable-next-line */}
									<img src={bannerH} alt="post banner" />
								</div>
								<div className={[previewSiteStyles.bodyText].join(" ")}>
									<MarkdownPrint text={body} />
								</div>
								<p className={styles.continue}>
									Você pode usar{" "}
									<a
										href="https://www.markdownguide.org/cheat-sheet/"
										target="_blank"
									>
										Markdown
									</a>{" "}
									para formatar o texto.
								</p>
							</div>
						)}
						{previewPage === "mural" && publicationType.includes("mural") && (
							<div>
								<div className={styles.postMural}>
									<div className={previewMuralStyles.postBanner}>
										{/* eslint-disable-next-line */}
										<img src={bannerV} alt="Banner do post" />
									</div>
									<div className={previewMuralStyles.postContent}>
										{categories && (
											<div className={previewMuralStyles.postCategoryList}>
												{categories
													.split(",")
													.map((category: TCategory, index_c) => (
														<div
															className={
																previewMuralStyles.postCategory
															}
															key={index_c}
														>
															<span>{category}</span>
														</div>
													))}
											</div>
										)}
										<div className={previewMuralStyles.postTitle}>
											<a>
												<h1>{title}</h1>
											</a>
										</div>
										<div className={previewMuralStyles.postDescription}>
											<p>{description}</p>
										</div>

										<div className={previewMuralStyles.bottomInfo}>
											{user && (
												<div className={previewMuralStyles.postAuthor}>
													<div
														className={previewMuralStyles.authorPicture}
													>
														{/* eslint-disable-next-line */}
														<img
															src={user.profilePhoto}
															alt={`Foto de ${user.name}`}
															width={100}
															height={100}
														/>
													</div>
													<div className={previewMuralStyles.authorInfo}>
														<span
															className={
																previewMuralStyles.authorName
															}
														>
															{user.name}
														</span>
														<span
															className={
																previewMuralStyles.authorDate
															}
														>
															{new Date().toDateString()}
														</span>
													</div>
												</div>
											)}

											<div className={previewMuralStyles.continue}>
												<span>Continue no QR Code</span>
												<QRCode
													text={
														process.env.NEXT_PUBLIC_URL +
														`/noticias/${slug}`
													}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}

						<div className={styles.actions}>
							<Button label="Voltar" type="secondary" onClick={handlePreview} />
							<Button label="Editar" type="primary" onClick={handleSubmit} />
						</div>
					</>
				)}
			</div>
		)
	}

	return (
		<div>
			<h1>Editar publicação</h1>
			{loading ? (
				<Loading />
			) : (
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
							value={publicationType}
							onChange={handleChange}
							input={<OutlinedInput label="Tipo de Postagem" />}
							renderValue={(selected) => selected.join(", ")}
						>
							{publishTypes.map((publishType) => (
								<MenuItem key={publishType} value={publishType}>
									<Checkbox checked={publicationType.indexOf(publishType) > -1} />
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
							Categorias separadas por vírgula
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
							<InputLabel htmlFor="banner-H">
								{publicationType.includes("mural") ? "Banner Horizontal" : "Banner"}
							</InputLabel>
							<OutlinedInput
								id="banner-H"
								value={bannerH}
								label={
									publicationType.includes("mural")
										? "Banner Horizontal"
										: "Banner"
								}
								onChange={(e) => setBannerH(e.target.value)}
							/>
							<FormHelperText id="banner-H-text">
								Esse banner ficará no topo da publicação, recomendamos o tamanho
								(1920x1080)
								<br />
								Você deve colocar o link da imagem
								<br />
							</FormHelperText>
						</FormControl>
					</div>
					{publicationType.includes("mural") && (
						<div className={styles.bannerPreview}>
							<FormControl variant="outlined" required>
								<InputLabel htmlFor="banner-V">Banner Vertical</InputLabel>
								<OutlinedInput
									id="banner-V"
									value={bannerV}
									label="Banner Vertical"
									onChange={(e) => setBannerV(e.target.value)}
								/>
								<FormHelperText id="banner-V-text">
									Esse banner ficará na lateral da publicação, recomendamos o
									tamanho (1000X1500)
									<br />
									Você deve colocar o link da imagem
								</FormHelperText>
							</FormControl>
						</div>
					)}

					<div className={styles.actions}>
						<Button label="Pré-visualizar" type="secondary" onClick={handlePreview} />
						<Button label="Editar" type="primary" />
					</div>
				</form>
			)}
		</div>
	)
}
