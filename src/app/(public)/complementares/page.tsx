import { Button } from "@/components/Button"
import Hint from "@/components/Hint"
import Image from "next/image"
import styles from "./page.module.css"

import MainDisciplinas from "/public/main_disciplinas.png"
import PC from "/public/lab/pc.png"

export const metadata = {
	title: "Atividades Complementares",
}

const atividades = [
	{
		type: "Participação",
		title: "Centro Acadêmico de Ciência da Computação da UESC - <b>CACIC</b>",
		description:
			"Nos seguintes cargos: coordenador geral, membros da comissão de assuntos acadêmicos, membros da comissão de eventos, secretária e tesoureiro: 50 horas/ano, não podendo exceder o total de 100 horas.",
	},
	{
		type: "Participação",
		title: "Empresa Júnior de Ciência da Computação - <b>TecnoJr</b>",
		description:
			"Nos seguintes cargos: presidente, conselheiro, diretor ou trainee: 50 horas/ano",
	},
	{
		type: "Participação",
		title: "Semana de Informática da UESC - <b>SINFORM</b>",
		description: "Nas atividades de apoio ao evento (alunos não-CACIC): 30 horas/evento",
	},
	{
		type: "Participação",
		title: "Semana de Informática da UESC - <b>SINFORM</b>",
		description: "Na atividade de instrutor de Minicursos à comunidade: 30 horas/minicurso",
	},
	{
		type: "Manutenção",
		title: "não remunerada de Laboratórios da Computação",
		description: "30 horas/semestre",
	},
	{
		type: "Participação",
		title: "Eventos científicos relacionados à Computação",
		description: "Máximo 80 horas",
	},
	{
		type: "Participação",
		title: "Orientando em Projeto de Iniciação Cientifica",
		description: "50 horas/projeto",
	},
	{
		type: "Participação",
		title: "Projetos de Extensão",
		description: "50 horas/projeto",
	},
	{
		type: "Atividades",
		title: "Voluntárias ligadas a Computação",
		description: "Máximo de 50 horas/ano",
	},
	{
		type: "Atividades",
		title: "Especiais apreciadas e aprovadas pelo Colegiado",
		description: "Máximo de 50 horas/ano/atividade",
	},
	{
		type: "Atividades",
		title: "Monitoria na UESC",
		description: "Máximo de 80 horas",
	},
	{
		type: "Atividades",
		title: "Estágio não curricular",
		description: "Máximo de 80 horas",
	},
]

export default function Complementares() {
	return (
		<main>
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
									href="http://nbcgib.uesc.br/colcic/baremacompl.html"
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
		</main>
	)
}
