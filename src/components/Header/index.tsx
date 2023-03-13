"use client"

import { MdKeyboardArrowDown, MdOutlineFileDownload, MdLink } from "react-icons/md"
import { useState } from "react"
import { usePathname } from "next/navigation"

import Image from "next/image"

import styles from "./header.module.css"

import ColcicLogo from "/public/logo.png"
import Link from "next/link"

export function Header() {
	const [showNavList, setShowNavList] = useState(false)
	const pathname = usePathname()

	function toggleNavList() {
		setShowNavList(!showNavList)
	}

	return (
		<header className={showNavList ? styles.showNavList : ""} id={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.wrapperContent}>
					<Link className={styles.logo} href="./">
						<Image src={ColcicLogo} alt="Logo do COLCIC" />
					</Link>
					<div className={styles.navList}>
						<ul>
							<Link href="./" data-active={pathname == "/"}>
								Início
							</Link>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Sobre o curso </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<Link href="./sobre" data-active={pathname == "/sobre"}>
										Ciência da Computação na UESC
									</Link>
									<Link
										href="./disciplinas"
										data-active={pathname == "/disciplinas"}
									>
										Programa das Disciplinas
									</Link>
									<Link
										target="_blank"
										href="https://colcic.uesc.br/files/comp_curriculares/matriz_cic_2012.pdf"
									>
										<span> Fluxograma do Curso </span>
										<MdOutlineFileDownload />
									</Link>
								</ul>
							</li>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Apoio ao estudante </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<Link
										target="_blank"
										href="http://www.prograd.uesc.br/PortalSagres/Acesso.aspx"
									>
										<span> Portal Acadêmico </span>
										<MdLink />
									</Link>
									<Link
										target="_blank"
										href="https://igorroc.github.io/finalcountdown/"
									>
										<span>Calculadora de Prova Final</span>
										<MdLink />
									</Link>
									<Link target="_blank" href="https://uesc.ilrocha.com/emails/">
										<span> Email dos professores </span>
										<MdLink />
									</Link>
									<Link
										href="./aproveitamentos"
										data-active={pathname == "/aproveitamentos"}
									>
										Aproveitamento de Estudos
									</Link>
									<Link
										href="./complementares"
										data-active={pathname == "/complementares"}
									>
										Atividades complementares (Barema)
									</Link>
									<Link
										target="_blank"
										href="https://colcic.uesc.br/files/comp_curriculares/regulamentoestagio.pdf"
									>
										<span> Regulamento do Estágio </span>
										<MdOutlineFileDownload />
									</Link>
								</ul>
							</li>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Colegiado </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<Link href="./colegiado" data-active={pathname == "/colegiado"}>
										Composição do colegiado
									</Link>
									<Link
										href="./calendario"
										data-active={pathname == "/calendario"}
									>
										Calendário de Reuniões
									</Link>
									<Link target="_blank" href="http://nbcgib.uesc.br/dcetweb/">
										<span>Área para membros do COLCIC</span>
										<MdLink />
									</Link>
								</ul>
							</li>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Diversos </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<Link target="_blank" href="http://sinform.tecnojr.com.br/">
										<span> SINFORM </span>
										<MdLink />
									</Link>
									<Link href="./licencas" data-active={pathname == "/licencas"}>
										Licenças acadêmicas de Software
									</Link>
								</ul>
							</li>
							<Link href="./contato" data-active={pathname == "/contato"}>
								Contato
							</Link>
						</ul>
					</div>
					<button className={styles.iconMenu} onClick={toggleNavList}>
						<div>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</button>
				</div>
			</div>

			<div id={styles.top}></div>
		</header>
	)
}
