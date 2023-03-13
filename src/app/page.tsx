import Image from "next/image"
import Link from "next/link"

import {
	MdArrowUpward,
	MdKeyboardArrowRight,
} from "react-icons/md"
import { BsDiscord, BsTelegram, BsInstagram } from "react-icons/bs"

import styles from "./page.module.css"
import { Button } from "@/components/Button"

import MainImage from "/public/main_home.png"
import ImageMissao from "/public/lamp.png"

import Tecno from "/public/entidades/tecno.png"
import CACIC from "/public/entidades/cacic.png"
import NIT from "/public/entidades/nit.png"
import CCAM from "/public/entidades/ccam.png"
import PPGMC from "/public/entidades/ppgmc.png"
import SBC from "/public/entidades/sbc.png"

import SlideShowAcademicos from "@/components/SlideShowAcademicos"

const entidades = [
	{
		image: CCAM,
		title: "CCAM",
		description: "Núcleo de Inovação Tecnológica",
		link: "https://nit.uesc.br",
	},
	{
		image: Tecno,
		title: "TecnoJr",
		description: "Associação Empresa Júnior de Computação",
		link: "https://tecnojr.com.br",
	},
	{
		image: PPGMC,
		title: "PPGMC",
		description: "Programa de Pós-Graduação em Modelagem Computacional",
		link: "http://nbcgib.uesc.br/ppgmc/",
	},
	{
		image: CACIC,
		title: "CACIC",
		description: "Centro Acadêmico de Ciência da Computação",
		link: "https://www.instagram.com/cacicuesc/",
	},
	{
		image: NIT,
		title: "NIT",
		description: "Núcleo de Inovação e Tecnologia",
		link: "http://www.uesc.br/nucleos/nit/",
	},
	{
		image: SBC,
		title: "SBC",
		description: "Sociedade Brasileira de Computação",
		link: "https://sbc.org.br",
	},
]

const redes = [
	{
		icon: BsDiscord,
		link: "https://discord.gg/7F2Q2tW",
	},
	{
		icon: BsTelegram,
		link: "https://t.me/joinchat/AAAAAFJxjzY8Y0Y8Xy0X9Q",
	},
	{
		icon: BsInstagram,
		link: "https://www.instagram.com/colegiado_cc/",
	},
]


export default function Home() {
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
							<Button label="Saiba mais" href="./sobre" type="primary" />
						</div>
						<div className={styles.mainContentPhoto}>
							<Image src={MainImage} alt="a" />
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
								<MdArrowUpward />
							</span>
						</div>
						<div className={styles.list}>
							<Link
								className={styles.item}
								href="https://discord.gg/Hk8a3UGaEm"
								target="_blank"
							>
								<BsDiscord />
								<p>Discord</p>
							</Link>
							<Link
								className={styles.item}
								href="https://t.me/+eXbZLjiXlyA0NDcx"
								target="_blank"
							>
								<BsTelegram />
								<p>Telegram</p>
							</Link>
							<Link
								className={styles.item}
								href="https://www.instagram.com/colcic_uesc/"
								target="_blank"
							>
								<BsInstagram />
								<p>Instagram</p>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section data-variant className="section">
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
			<section className="section">
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
							<Image src={ImageMissao} alt="as" />
						</div>
						<div className={styles.missao}>
							<h1>Missão do Curso</h1>
							<p>
								Proporcionar o<b>desenvolvimento humano, social e econômico,</b>{" "}
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
