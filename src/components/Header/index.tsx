"use client"

import { MdKeyboardArrowDown, MdOutlineFileDownload, MdLink } from "react-icons/md"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

import Image from "next/image"

import styles from "./header.module.css"

import ColcicLogo from "/public/logo.png"
import Link from "next/link"
import { useUserToken } from "@/utils/handleUserToken"
import useUser from "@/hooks/users"
import { TUser } from "@/types/user"

const navList = [
	{
		title: "Inicio",
		href: "/",
		type: "internal",
	},
	{
		title: "Sobre o curso",
		list: [
			{
				title: "Ciência da Computação na UESC",
				href: "/sobre",
				type: "internal",
			},
			{
				title: "Programa das Disciplinas",
				href: "/disciplinas",
				type: "internal",
			},
			{
				title: "Fluxograma do Curso",
				href: "https://colcic.uesc.br/files/comp_curriculares/matriz_cic_2012.pdf",
				type: "file",
			},
		],
	},
	{
		title: "Apoio ao estudante",
		list: [
			{
				title: "Portal Acadêmico",
				href: "http://www.prograd.uesc.br/PortalSagres/Acesso.aspx",
				type: "external",
			},
			{
				title: "Calculadora de Prova Final",
				href: "https://igorroc.github.io/finalcountdown/",
				type: "external",
			},
			{
				title: "Email dos professores",
				href: "https://uesc.ilrocha.com/emails/",
				type: "external",
			},
			{
				title: "Aproveitamento de Estudos",
				href: "/aproveitamentos",
				type: "internal",
			},
			{
				title: "Atividades complementares (Barema)",
				href: "/complementares",
				type: "internal",
			},
			{
				title: "Regulamento do Estágio",
				href: "https://colcic.uesc.br/files/comp_curriculares/regulamentoestagio.pdf",
				type: "file",
			},
		],
	},
	{
		title: "Colegiado",
		list: [
			{
				title: "Composição do colegiado",
				href: "/colegiado",
				type: "internal",
			},
			{
				title: "Calendário de Reuniões",
				href: "/calendario",
				type: "internal",
			},
		],
	},
	{
		title: "Diversos",
		list: [
			{
				title: "SINFORM",
				href: "https://sinform.uesc.br/",
				type: "external",
			},
			{
				title: "Licenças acadêmicas de Software",
				href: "/licencas",
				type: "internal",
			},
			{
				title: "Área do Professor",
				href: "/login",
				type: "internal",
			},
		],
	},
	{
		title: "Notícias",
		href: "/noticias",
		type: "internal",
	},
	{
		title: "Contato",
		href: "/contato",
		type: "internal",
	},
]

export function Header() {
	const [showNavList, setShowNavList] = useState(false)
	const pathname = usePathname()

	const { token } = useUserToken()
	const { user } = useUser({ token })

	function toggleNavList() {
		setShowNavList(!showNavList)
	}

	return (
		<header className={showNavList ? styles.showNavList : ""} id={styles.header}>
			<div className={styles.wrapper}>
				<a className={styles.skipLink} href="#main-content">
					Pular para o conteúdo principal
				</a>

				<div className={styles.wrapperContent}>
					<Link className={styles.logo} href="./">
						<Image
							src={ColcicLogo}
							alt="Logo do Colegiado de Ciência da Computação da UESC"
						/>
					</Link>

					<div className={[styles.sideMenu, styles.sideMenuMobile].join(" ")}>
						<button
							className={styles.iconMenu}
							onClick={toggleNavList}
							aria-label="Ativar menu lateral"
						>
							<div>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</button>

						{user && (
							<Link
								href="/dashboard"
								className={styles.userPhoto}
								title="Entrar no painel"
							>
								<Image
									src={user.profilePhoto}
									alt="Foto de perfil do usuário"
									width={100}
									height={100}
								/>
							</Link>
						)}
					</div>

					{/* <div className={[styles.sideMenu, styles.sideMenuDesktop].join(" ")}> */}
					<nav className={styles.navList}>
						<ul>
							{navList.map((item, i) => {
								if (item.list) {
									return (
										<li
											className={styles.dropdown}
											data-active={item.list.some(
												(link) => pathname == link.href
											)}
											key={i}
										>
											<span className={styles.title}>
												<span> {item.title} </span>
												<MdKeyboardArrowDown />
											</span>
											<ul>
												{item.list.map((link, j) => (
													<Link
														href={link.href}
														key={`${i}${j}`}
														data-active={pathname == link.href}
													>
														{link.title}
														{link.type == "external" && <MdLink />}
														{link.type == "file" && (
															<MdOutlineFileDownload />
														)}
													</Link>
												))}
											</ul>
										</li>
									)
								} else {
									return (
										<Link
											href={item.href}
											data-active={pathname == item.href}
											key={i + "link"}
										>
											{item.title}
										</Link>
									)
								}
							})}
						</ul>
					</nav>

					{user && (
						<Link
							href="/dashboard"
							className={[styles.userPhoto, styles.userPhotoDesktop].join(" ")}
							title="Entrar no painel"
						>
							<Image
								src={user.profilePhoto}
								alt="Foto de perfil do usuário"
								width={100}
								height={100}
							/>
						</Link>
					)}

					{/* </div> */}
				</div>
			</div>

			<div id={styles.top}></div>
		</header>
	)
}
