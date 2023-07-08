import Image from "next/image"
import Link from "next/link"

import { MdArrowDownward, MdKeyboardArrowRight } from "react-icons/md"

import styles from "./page.module.css"
import { Button } from "@/components/Button"

import MainImage from "/public/main_home.png"
import ImageMissao from "/public/lamp.png"

import SlideShowAcademicos from "@/components/SlideShowAcademicos"

import { redes, entidades } from "@/changeable/inicio"
import HomePosts from "@/components/HomePosts"

export default async function Home() {
	return (
		<main>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h2>Bem vindo(a) ao</h2>
							<h1>
								Colegiado de <br />
								<b>Ciência da Computação</b>
							</h1>
							<p>
								O Colegiado de Curso de Ciência da Computação é{" "}
								<b>órgão da administração setorial</b> de deliberação{" "}
								<b>coletiva, supervisão e coordenação</b> didático-pedagógica do
								curso Ciência da Computação e integra a estrutura da Universidade
								Estadual de Santa Cruz.
							</p>
							<Button label="Sobre o curso" href="./sobre" type="primary" />
						</div>
						<div className={styles.mainContentPhoto}>
							<Image
								src={MainImage}
								alt="Pessoas trabalhando com o computador em uma mesa de madeira"
							/>
						</div>
					</div>
				</div>
			</section>
			<section data-variant className={`${styles.modalRedes} ${"section"}`}>
				<div className={"MaxWidthWrapper"}>
					<div className={`${styles.redesSociais} ${styles.scrollAnimation}`}>
						<div className={styles.title}>
							<p>Estamos nas redes!</p>
							<span>
								<MdArrowDownward />
							</span>
						</div>
						<div className={styles.list}>
							{redes.map((rede, index) => (
								<Link
									className={styles.item}
									href={rede.link}
									target="_blank"
									key={index}
								>
									{rede.icon}
									<p>{rede.label}</p>
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
			<section data-variant className={"section"}>
				<div className={"MaxWidthWrapper"}>
					<h1>Notícias importantes</h1>
					<HomePosts />
				</div>
			</section>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.entidades}>
						<h1>Instituições e unidades parceiras</h1>
						<div className={styles.cardList}>
							{entidades.map((entidade) => (
								<div
									className={`${styles.card} ${styles.scrollAnimation}`}
									key={entidade.title}
								>
									<Image src={entidade.image} alt={entidade.title} />
									<h2>{entidade.title}</h2>
									<p>{entidade.description}</p>
									<Link target="_blank" href={entidade.link}>
										<span>Saiba mais</span>
										<MdKeyboardArrowRight />
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section data-variant className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.academicos}>
						<h1>Acadêmicos</h1>
						<p>Clique no item desejado para ter acesso ao arquivo ou ao site!</p>
						<SlideShowAcademicos />
					</div>
				</div>
			</section>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContentPhoto}>
							<Image
								src={ImageMissao}
								alt="Mão segurando uma lâmpada, como se estivesse segurando uma ideia"
							/>
						</div>
						<div className={styles.missao}>
							<h1>Missão do Curso</h1>
							<p>
								Proporcionar o <b>desenvolvimento humano, social e econômico,</b>{" "}
								formar <b>profissionais capacitados para desenvolver</b> produtos,
								serviços e processos da tecnologia da informação e{" "}
								<b>realizar pesquisas</b> no campo da ciência e inovação.
							</p>
							<Button label="Entre em contato" type="secondary" href="./contato" />
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
