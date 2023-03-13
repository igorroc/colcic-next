"use client"

import { MdKeyboardArrowDown, MdOutlineFileDownload, MdLink } from "react-icons/md"
import { useState } from "react"
import { usePathname } from "next/navigation"

import Image from "next/image"

import styles from "./header.module.css"

import ColcicLogo from "/public/logo.png"

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
					<a className={styles.logo} href="./">
						<Image src={ColcicLogo} alt="Logo do COLCIC" />
					</a>
					<div className={styles.navList}>
						<ul>
							<a href="./" data-active={pathname == "/"}>
								Início
							</a>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Sobre o curso </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<a href="./sobre" data-active={pathname == "/sobre"}>
										Ciência da Computação na UESC
									</a>
									<a
										href="./disciplinas"
										data-active={pathname == "/disciplinas"}
									>
										Programa das Disciplinas
									</a>
									<a
										target="_blank"
										href="http://nbcgib.uesc.br/colcic/document/comp_curriculares/matriz_cic_2012.pdf"
									>
										<span> Fluxograma do Curso </span>
										<MdOutlineFileDownload />
									</a>
								</ul>
							</li>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Apoio ao estudante </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<a
										target="_blank"
										href="http://www.prograd.uesc.br/PortalSagres/Acesso.aspx"
									>
										<span> Portal Acadêmico </span>
										<MdLink />
									</a>
									<a
										target="_blank"
										href="https://igorroc.github.io/finalcountdown/"
									>
										<span>Calculadora de Prova Final</span>
										<MdLink />
									</a>
									<a target="_blank" href="https://uesc.ilrocha.com/emails/">
										<span> Email dos professores </span>
										<MdLink />
									</a>
									<a
										href="./aproveitamentos"
										data-active={pathname == "/aproveitamentos"}
									>
										Aproveitamento de Estudos
									</a>
									<a
										href="./complementares"
										data-active={pathname == "/complementares"}
									>
										Atividades complementares (Barema)
									</a>
									<a
										target="_blank"
										href="http://nbcgib.uesc.br/colcic/document/comp_curriculares/regulamentoestagio.pdf"
									>
										<span> Regulamento do Estágio </span>
										<MdOutlineFileDownload />
									</a>
								</ul>
							</li>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Colegiado </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<a href="./colegiado" data-active={pathname == "/colegiado"}>
										Composição do colegiado
									</a>
									<a href="./calendario" data-active={pathname == "/calendario"}>
										Calendário de Reuniões
									</a>
									<a target="_blank" href="http://nbcgib.uesc.br/dcetweb/">
										<span>Área para membros do COLCIC</span>
										<MdLink />
									</a>
								</ul>
							</li>
							<li className={styles.dropdown}>
								<span className={styles.title}>
									<span> Diversos </span>
									<MdKeyboardArrowDown />
								</span>
								<ul>
									<a target="_blank" href="http://sinform.tecnojr.com.br/">
										<span> SINFORM </span>
										<MdLink />
									</a>
									<a href="./licencas" data-active={pathname == "/licensas"}>
										Licenças acadêmicas de Software
									</a>
								</ul>
							</li>
							<a href="./contato" data-active={pathname == "/contato"}>
								Contato
							</a>
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

			<div id="top"></div>
		</header>
	)
}
