import Image from "next/image"
import { TbTargetArrow } from "react-icons/tb"
import { Button } from "@/components/Button"

import styles from "./page.module.css"

import AboutPics from "/public/about_pics.png"
import Studying from "/public/studying.png"

import Tower from "/public/lab/tower.png"
import Software from "/public/lab/software.png"
import Design from "/public/lab/design.png"
import PC from "/public/lab/pc.png"
import Auditorio from "/public/lab/auditorio.png"

export const metadata = {
	title: "Sobre",
}

const infraestrutura = [
	{
		title: "Térreo",
		labs: [
			{
				title: "Lab 4A",
				photo: Tower,
				description:
					"Laboratório de eletrônica, lógica digital e arquitetura de computadores",
				delay: 100,
			},
			{
				title: "Lab 6A",
				photo: PC,
				description: "Laboratório de redes de computadores",
				delay: 200,
			},
			{
				title: "Auditório",
				photo: Auditorio,
				description: "Pav. de Ciências Exatas e Tecnológicas, capacidade 160 pessoas",
				delay: 300,
			},
		],
	},
	{
		title: "1º andar",
		labs: [
			{
				title: "Lab 4B",
				photo: Software,
				description: "Laboratório de desenvolvimento de software",
				delay: 400,
			},
			{
				title: "Lab 6B",
				photo: Software,
				description: "Laboratório de desenvolvimento de software",
				delay: 500,
			},
			{
				title: "Lab 7B",
				photo: Design,
				description: "Laboratório de desenho auxiliado por computadores (CAD/CAM)",
				delay: 600,
			},
			{
				title: "Lab 16B",
				photo: Software,
				description: "Laboratório de banco de dados e aplicações com dados",
				delay: 700,
			},
			{
				title: "Lab 17B",
				photo: Software,
				description: "Laboratório de engenharia de software e sistemas de informação",
				delay: 800,
			},
			{
				title: "Lab 18B",
				photo: Software,
				description: "Laboratório de computação aplicada",
				delay: 900,
			},
			{
				title: "Lab 19B",
				photo: Software,
				description: "Laboratório computacional para aplicação geral",
				delay: 1000,
			},
			{
				title: "Lab 20B",
				photo: Software,
				description: "Laboratório para algoritmos e programação",
				delay: 1100,
			},
		],
	},
	{
		title: "2º andar",
		labs: [
			{
				title: "Lab 19C",
				photo: Software,
				description: "Laboratório computacional para aplicação geral",
				delay: 1200,
			},
		],
	},
]

export default function Sobre() {
	return (
		<main>
			<section data-variant className="section">
				<div className="MaxWidthWrapper">
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h1>
								Curso de <br />
								<b>Ciência da Computação</b>
							</h1>
							<p>
								Autorizado em 1999 o curso de Ciência da Computação já formou{" "}
								<b>mais de 350 bacharéis</b> que hoje são{" "}
								<b>professores e pesquisadores</b> e também integram times em{" "}
								<b>grandes empresas</b>.
							</p>
							<Button label="Entre em contato" href="/contato" type="secondary" />
						</div>
						<div className={styles.mainContentPhoto}>
							<Image src={AboutPics} alt="ALTERAR" />
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="MaxWidthWrapper">
					<div className={styles.objetivo}>
						<div className={styles.title}>
							<span>
								<TbTargetArrow />
							</span>
							<h2>Objetivo</h2>
						</div>
						<div>
							<p>
								Proporcionar o <b>desenvolvimento</b> humano, social e econômico,
								formar <b>profissionais capacitados</b> para desenvolver produtos,
								serviços e processos da tecnologia da informação e realizar{" "}
								<b>pesquisas</b> no campo da ciência e inovação.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section data-variant className={["section", styles.roundedEgresso].join(" ")}>
				<div className="MaxWidthWrapper">
					<div className={styles.egresso}>
						<h2>Perfil do Egresso</h2>

						<div className={styles.wrapperContent}>
							<div className={styles.content}>
								<p className={styles.scrollAnimation}>
									O Curso de Bacharelado em Ciência da Computação da Universidade
									Estadual de Santa Cruz provê uma formação que capacita o
									profissional para a solução de problemas do mundo real, por meio
									da construção de{" "}
									<b className={styles.bolder}>modelos computacionais</b> e de sua
									implementação.
								</p>
								<p className={styles.scrollAnimation}>
									As características fundamentais desse profissional são:{" "}
									<b className={styles.bolder}>conhecimento</b> e{" "}
									<b className={styles.bolder}>domínio do processo</b> de projeto
									para construir a solução de problemas com base científica;
									capacidade para aplicar seus conhecimentos de forma independente
									e inovadora, acompanhando a evolução do setor e contribuindo na
									busca de soluções nas diferentes áreas aplicadas; formação
									humanística, permitindo a compreensão do mundo e da sociedade,
									uma formação de negócios, permitindo uma visão da dinâmica
									organizacional e estimulando o{" "}
									<b className={styles.bolder}>trabalho em grupo</b> desenvolvendo
									suas{" "}
									<b className={styles.bolder}>
										habilidades de comunicação e expressão
									</b>
									.
								</p>
								<p className={styles.scrollAnimation}>
									O egresso do curso é um{" "}
									<b className={styles.bolder}>profissional apto a resolver</b> as
									seguintes classes de problemas: modelagem e especificação dos
									problemas do mundo real, com o uso de técnicas apresentadas no
									Curso; implementação de sistemas de computação; construção da
									solução do problema de forma efetiva e contextualizada ao
									problema original, bem como está apto a absorver e desenvolver
									novas tecnologias. O Profissional egresso do Curso de
									Bacharelado em Ciência da Computação estará{" "}
									<b className={styles.bolder}>apto a desempenhar</b>, entre
									outras, as seguintes atividades:
								</p>
								<ul>
									<li className={styles.scrollAnimation}>
										<b>Gerenciar</b> equipes de desenvolvimento de sistemas;
									</li>
									<li className={styles.scrollAnimation}>
										<b>Prestar serviços</b> de assessoria e consultoria nas
										diversas áreas da Ciência da Computação;
									</li>
									<li className={styles.scrollAnimation}>
										<b>Acompanhar, estudar e aplicar</b> novas{" "}
										<b>tecnologias</b> procurando assegurar a modernização dos
										sistemas, a melhoria da qualidade e o aumento da
										produtividade, associados à redução dos custos operacionais;
									</li>
									<li className={styles.scrollAnimation}>
										Desempenhar <b>atividades acadêmicas</b> de ensino e de
										pesquisa na área de informática;
									</li>
									<li className={styles.scrollAnimation}>
										<b>Projetar, desenvolver e utilizar</b> metodologias
										avançadas de programação na resolução de problemas;
									</li>
									<li className={styles.scrollAnimation}>
										<b>Projetar, desenvolver, analisar, ajustar e utilizar</b>{" "}
										softwares de redes de computadores;
									</li>
									<li className={styles.scrollAnimation}>
										<b>Projetar, desenvolver e utilizar</b> metodologias
										avançadas de modelagem de sistemas de informação;
									</li>
									<li className={styles.scrollAnimation}>
										<b>Participar</b> compondo ou <b>coordenando</b> atividades
										de Engenharia de Software segundo as metodologias mais
										adequadas e consagradas pela ciência e pelo mercado.
									</li>
								</ul>
							</div>

							<div className={styles.image}>
								<Image src={Studying} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="MaxWidthWrapper">
					<div className={styles.infraestrutura}>
						<h2>Infraestrutura</h2>
						<div className={styles.container}>
							{infraestrutura.map((andar, index) => (
								<div key={index} className={styles.andar}>
									<h3>{andar.title}</h3>
									<div className={styles.list}>
										{andar.labs.map((sala, index) => (
											<div
												className={[
													styles.card,
													styles.scrollAnimation,
												].join(" ")}
												style={{
													transitionDelay: `${sala.delay}ms !important`,
												}}
												key={index}
											>
												<Image src={sala.photo} alt="" />
												<h4>{sala.title}</h4>
												<p>{sala.description}</p>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
