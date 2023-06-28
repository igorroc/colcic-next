import { Button } from "@/components/Button"
import Hint from "@/components/Hint"
import Image from "next/image"
import styles from "./page.module.css"

import MainDisciplinas from "/public/main_disciplinas.png"
import PC from "/public/lab/pc.png"

import { atividades } from "@/changeable/atividades-complementares"

export const metadata = {
	title: "Atividades Complementares",
}


export default function Complementares() {
	return (
		<>
			<section data-variant className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h1>
								Atividades <br />
								<b>Complementares</b>
							</h1>
							<p>
								Segundo as Diretrizes Curriculares Nacionais para Cursos de
								Computação, as Atividades Complementares são componentes importantes
								para o desenvolvimento pleno do aluno, servindo de estímulo para uma
								formação prática independente e interdisciplinar, sobretudo nas
								relações com o mundo do trabalho.
							</p>

							<Button label="Ver atividades" href="#atividades" type="secondary" />
						</div>
						<div className={styles.mainContentPhoto}>
							<Image
								src={MainDisciplinas}
								alt="Foto do auditório Paulo Solto na UESC, Katia Vaskys está palestrando para o evento da SINFORM, pessoas sentadas nas cadeiras"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.instrucoes}>
						<h2>Instruções</h2>
						<div className={styles.text}>
							<p className={styles.scrollAnimation}>
								Leia o procedimento abaixo. Preencha e imprima o{" "}
								<a
									target="_blank"
									href="https://docs.google.com/spreadsheets/d/1URTjQdUb_4VHg7V-VUo53xPQexYkQwLijmIjwIvMxIU/edit?usp=sharing"
								>
									Barema
								</a>
							</p>
							<ol>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "0ms !important" }}
								>
									Junte{" "}
									<b>cópias de todos os comprovantes e numere sequencialmente</b>{" "}
									as folhas no canto superior direito;
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "100ms !important" }}
								>
									<b>Some a carga horária</b> de cada atividade respeitando a
									orientação do Barema;
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "200ms !important" }}
								>
									No Barema, <b>preencha a coluna</b> &quot;Carga horária
									cumprida&quot; com o <b>somatório da carga horária</b> das
									atividades realizadas correspondentes ao item do Barema;
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "300ms !important" }}
								>
									Na mesma linha do Barema, na coluna &quot;Comprovante na
									folha&quot;,{" "}
									<b>indique o(s) número(s) da(s) folha(s) correspondente(s)</b> à
									soma das cargas horárias por Atividade;
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "400ms !important" }}
								>
									Ao final, <b>clique no botão &quot;TOTAL HORAS&quot;</b>, caso
									seja 200 horas ou mais, imprima, junte aos comprovantes e entre
									com Requisição no Protocolo;
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "500ms !important" }}
								>
									Solicite ao atendente do Protocolo dar &quot;fé pública&quot;
									nas cópias dos comprovantes conforme os originais, para{" "}
									<b>autenticação</b>.
								</li>
							</ol>
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.atividades} id="atividades">
						<div className={styles.title}>
							<h2>Atividades complementares válidas</h2>
							<p>Conforme Projeto Pedagógico do Curso</p>
							<Hint
								desktop="Passe o mouse por cima de um card para ver mais informações"
								mobile="Clique em um card para ver mais informações"
							/>
						</div>
						<div className={styles.listaAtividades} id={styles.listaAtividades}>
							{atividades.map((atividade, index) => (
								<div key={index} className={styles.card}>
									<Image
										src={PC}
										alt="Ilustração 2d de um computador com códigos na tela"
									/>
									<h2>{atividade.type}</h2>
									<p dangerouslySetInnerHTML={{ __html: atividade.title }}></p>
									<div
										className={styles.description}
										dangerouslySetInnerHTML={{ __html: atividade.description }}
									></div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<p className={styles.atividadesFooter}>
						As atividades serão computadas como <b>Atividades Complementares</b> quando
						devidamente <b>comprovadas</b> através de <b>certificados e cronograma</b>{" "}
						das mesmas, emitidas pelos respectivos responsáveis. Os alunos deverão
						realizar as atividades no decorrer do curso apresentando, no último
						semestre, <b>cópias autenticadas de todos os certificados</b> para que sejam
						computadas as horas. <b className={styles.danger}>O não comprimento</b> das{" "}
						<b className={styles.danger}> 200 horas</b> de atividades complementares{" "}
						<b className={styles.danger}>inviabiliza a colação de grau</b> do aluno. O
						aluno poderá verificar junto ao colegiado, a qualquer momento, a validade do
						seu certificado.
					</p>
				</div>
			</section>
		</>
	)
}
