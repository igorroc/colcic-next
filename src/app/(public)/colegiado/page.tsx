import { Button } from "@/components/Button"
import Image from "next/image"
import styles from "./page.module.css"

import MainImage from "/public/colegiado.png"

export const metadata = {
	title: "Composição do Colegiado",
}

const composicao = [
	{
		materia: "Álgebra",
		departamento: "Matemática",
		membro: "Prof. Eduardo Silva Palmeira",
	},
	{
		materia: "Administração de empresa",
		departamento: "DCAC",
		membro: "Profa. Clemilda Gonzaga Santos",
	},
	{
		materia: "Arquitetura e organização de computadores",
		departamento: "Computação",
		membro: "Profa. Susana Marrero Iglesiasa",
	},
	{
		materia: "Banco de dados",
		departamento: "Computação",
		membro: "Profa. Tricia Souto Santos",
	},
	{
		materia: "Cálculo diferencial e integral",
		departamento: "Matemática",
		membro: "Profa. Mirela Vanina de Mello",
	},
	{
		materia: "Direito e legislação",
		departamento: "DCJUR",
		membro: "Prof. Wagner de Oliveira Rodrigues ",
	},
	{
		materia: "Eletrônica",
		departamento: "Computação",
		membro: "Profa. Martha Ximena Torres Delgado",
	},
	{
		materia: "Engenharia de software",
		departamento: "Computação",
		membro: "Prof. Luciano Ângelo de Souza Bernardes",
	},
	{
		materia: "Economia",
		departamento: "Economia",
		membro: "Prof. Pedro Lopes Marinho",
	},
	{
		materia: "Estágio",
		departamento: "Computação",
		membro: "Prof. Marcelo Ossamu Honda",
	},
	{
		materia: "Física",
		departamento: "Física",
		membro: "Prof. Marcelo O'Donnell Krause",
	},
	{
		materia: "Inglês",
		departamento: "DLA",
		membro: "Profa. Walkíria França Vieira Teixeira",
	},
	{
		materia: "Inteligência artificial",
		departamento: "Computação",
		membro: "Prof. Paulo Eduardo Ambrósio",
	},
	{
		materia: "Linguagens de programação",
		departamento: "Computação",
		membro: "Prof. Hélder Conceição Almeida",
	},
	{
		materia: "Lógica matemática",
		departamento: "Computação",
		membro: "Prof. Francisco Bruno Souza Oliveira",
	},
	{
		materia: "Metodologia da pesquisa científica",
		departamento: "DFCH",
		membro: "Profa. Ana Paula de Almeida Andrade",
	},
	{
		materia: "Probabilidade e estatística",
		departamento: "Estatística",
		membro: "Prof. José Cláudio Faria",
	},
	{
		materia: "Processamento de sinais",
		departamento: "Computação",
		membro: "Profa. Vânia Cordeiro da Silva",
	},
	{
		materia: "Programação e estrutura de dados",
		departamento: "Computação",
		membro: "Prof. Dany Sanchez Dominguez",
	},
	{
		materia: "Redes de transmissão de dados",
		departamento: "Computação",
		membro: "Prof. Mathias Santos de Brito",
	},
	{
		materia: "Sistemas de informação e bancos de dados",
		departamento: "Computação",
		membro: "Prof. Sérgio Fred Ribeiro Andrade",
	},
	{
		materia: "Sistemas operacionais",
		departamento: "Computação",
		membro: "Prof. Antonio Henrique Figueira Louro",
	},
	{
		materia: "Sociologia",
		departamento: "Computação",
		membro: "Prof. Hamilton José Brumatto",
	},
	{
		materia: "Teoria da computação",
		departamento: "Computação",
		membro: "Profa. César Alberto Bravo Pariente",
	},
	{
		materia: "Tópicos em computação",
		departamento: "Computação",
		membro: "Prof. Esbel Tomas Valero Orellana",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sra. Brenda Castro",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sr. Brendon Souza",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sr. Igor Vieira",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sra. Isabelle Silva dos Santos da Cruz",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sr. Raphael Viana",
	},
	{
		materia: "Representação Discente",
		departamento: "Computação",
		membro: "Sra. Solana Ametista Lemos",
	},
]

const coordenacao = [
	{ name: "Hélder Conceição Almeida", role: "Coordenador" },
	{ name: "Trícia Souto Santos", role: "Vice-Coordenadora" },
	{ name: "Rita de Cássia Souza Dias da Silva", role: "Secretária" },
	{ name: "Ramon Santos Costa", role: "Técnico de Informática" },
	{ name: "Flávio Victor Souza de Melo", role: "Técnico de Informática" },
]

export default function Colegiado() {
	return (
		<main>
			<section className="section" data-variant>
				<div className="MaxWidthWrapper">
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h1>
								Sobre o <br />
								<b>Colegiado</b>
							</h1>
							<p>
								O Colegiado de Curso é órgão da administração setorial de
								deliberação coletiva, supervisão e coordenação didático-pedagógica
								do curso e integra a estrutura da Universidade Estadual de Santa
								Cruz. Assim, o colegiado está intimamente ligado aos aspectos
								pedagógicos do curso, definindo o projeto pedagógico, grade
								curricular, dentre outros. Este site visa ser um elo entre a
								comunidade, estudantes e a instituição, promovendo maior integração
								e dinamismo na comunicação entre ambos.
							</p>

							<Button
								label="Conheça a coordenação"
								href="#coordenacao"
								type="secondary"
							/>
						</div>
						<div className={styles.mainContentPhoto}>
							<Image src={MainImage} alt="ALTERAR" />
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className={styles.MaxWidthWrapper}>
					<div className={styles.composicao}>
						<h2>Composição - Biênio 2020-2022</h2>

						<p className={[styles.hint, styles.mobile].join(" ")}>
							Arraste para mais informações
						</p>
						<div className={styles.centerTable}>
							<div className={styles.wrapperTable}>
								<div className={styles.table} id="tableColegiado">
									<div className={styles.header}>
										<h3>Matéria</h3>
										<h3>Departamento/Área</h3>
										<h3>Membro</h3>
									</div>
									<div className={styles.content}>
										{composicao.map((membro, index) => (
											<div className={styles.row} key={index}>
												<span>{membro.materia}</span>
												<span>{membro.departamento}</span>
												<span>{membro.membro}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className={styles.MaxWidthWrapper}>
					<div className={styles.coordenação} id="coordenacao">
						<h2>Coordenação</h2>

						<p className={[styles.hint, styles.mobile].join(" ")}>
							Arraste para mais informações
						</p>
						<div className={styles.centerTable}>
							<div className={styles.wrapperTable}>
								<div className={styles.table} id="tableCoordenação">
									<div className={styles.header}>
										<h3>Nome</h3>
										<h3>Cargo</h3>
									</div>
									<div className={styles.content}>
										{coordenacao.map((membro, index) => (
											<div className={styles.row} key={index}>
												<span>{membro.name}</span>
												<span>{membro.role}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
