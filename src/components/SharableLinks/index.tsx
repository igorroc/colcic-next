"use client"

import React from "react"
import { AiOutlineTwitter, AiOutlineWhatsApp } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { FiLink2 } from "react-icons/fi"

import styles from "./sharableLinks.module.css"

type SharableLinksProps = {
	slug?: string
}

export default function SharableLinks(props: SharableLinksProps) {
	function copy(type: string) {
		const url = process.env.NEXT_PUBLIC_URL + "/noticias/" + props.slug
		const mensagem = `Queria compartilhar uma notícia incrível do Colegiado de Computação! 🚀 Você precisa conferir!\n\n🔗 Veja mais detalhes aqui: ${url}\n\nCompartilhe com seus amigos e colegas. Vamos espalhar essa novidade juntos! 🙌\n\n#ColegiadoDeComputação #NotíciasTecnológicas`
		switch (type) {
			case "link":
				navigator.clipboard.writeText(mensagem)
				alert("Link copiado!")
				break
			case "whatsapp":
				window.open(
					`https://api.whatsapp.com/send?text=${mensagem}`,
					"_blank",
					"noopener noreferrer"
				)
				break
			case "linkedin":
				window.open(
					`https://www.linkedin.com/shareArticle?mini=true&url=${mensagem}`,
					"_blank",
					"noopener noreferrer"
				)
				break
			case "twitter":
				window.open(
					`https://twitter.com/intent/tweet?url=${mensagem}`,
					"_blank",
					"noopener noreferrer"
				)
				break
		}
	}

	return (
		<div className={styles.socialMediaIconsContainer}>
			<div className={styles.iconContainer} onClick={() => copy("link")}>
				<FiLink2 size={22} />
			</div>
			<div className={styles.iconContainer} onClick={() => copy("whatsapp")}>
				<AiOutlineWhatsApp size={24} />
			</div>
			<div className={styles.iconContainer} onClick={() => copy("linkedin")}>
				<FaLinkedinIn size={24} />
			</div>
			<div className={styles.iconContainer} onClick={() => copy("twitter")}>
				<AiOutlineTwitter size={24} />
			</div>
		</div>
	)
}
