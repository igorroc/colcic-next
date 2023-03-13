import Link from "next/link"
import React from "react"

import styles from "./slideshow.module.css"

import { MdCalendarMonth, MdLibraryBooks } from "react-icons/md"
import { TbLetterS } from "react-icons/tb"

const academicos = [
	{
		icon: <MdCalendarMonth />,
		title: "Horário 2023.1",
		description: "atualizado em 03/11/2022",
		target: "_blank",
		href: "https://colcic.uesc.br/files/horarios/COLCIC_Horarios_2023.1_VERSAO_0.2.pdf",
	},
	{
		icon: <MdCalendarMonth />,
		title: "Horário 2022.2",
		description: "final",
		target: "_blank",
		href: "https://colcic.uesc.br/files/horarios/COLCIC_Horarios_2022.2_Versao_1_final_prof_fisica.pdf",
	},
	{
		icon: <MdCalendarMonth />,
		title: "Horário 2022.1",
		description: "final",
		target: "_blank",
		href: "https://colcic.uesc.br/files/horarios/COLCIC_Horarios_2022_1_V1.10_20220312.pdf",
	},
	{
		icon: <TbLetterS />,
		title: "SAGRES",
		target: "_blank",
		href: "http://www.prograd.uesc.br/PortalSagres/Acesso.aspx",
	},
	{
		icon: <MdLibraryBooks />,
		title: "Biblioteca",
		target: "_blank",
		href: "http://www.uesc.br/biblioteca/",
	},
]

export default function SlideShowAcademicos() {
	return (
		<div className={styles.wrapperSlideShow}>
			<div className={styles.slideShow}>
				{academicos.map((item: any, index: number) => (
					<Link
						className={styles.slide}
						target={item.target ? item.target : "_self"}
						href={item.href ? item.href : "#"}
						key={index}
					>
						<span className={styles.icon}>{item.icon ? item.icon : "📚"}</span>
						<p>{item.title ? item.title : "Título"}</p>
					</Link>
				))}
			</div>
		</div>
	)
}
