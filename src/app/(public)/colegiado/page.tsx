import { Button } from "@/components/Button"
import Image from "next/image"
import styles from "./page.module.css"

import MainImage from "/public/colegiado.png"

import { composicao, coordenacao } from "@/changeable/composicao-colegiado"

export const metadata = {
	title: "Composição do Colegiado",
}

export default function Colegiado() {
	return (
		<>
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
							<Image
								src={MainImage}
								alt="Foto do corredor onde fica a sala do colegiado de Ciência da Computação na UESC"
							/>
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
		</>
	)
}
