import { Button } from "@/components/Button"
import Image from "next/image"
import styles from "./page.module.css"

import MainImage from "/public/astronaut.png"

export const metadata = {
	title: "Aproveitamento de Estudos",
}

export default function Aproveitamentos() {
	return (
		<main>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h1>
								Aproveitamento <br />
								<b>de Estudos</b>
							</h1>
							<p>
								O aluno que cursou disciplinas em outras instituições de ensino pode{" "}
								<b>solicitar dispensa de disciplinas</b> previstas no curso através
								do processo de Aproveitamento de Estudos.
							</p>
							<Button label="Saiba mais" type="primary" href="#procedimentos" />
						</div>
					</div>
				</div>
			</section>
			<section data-variant className={[styles.pointedSection, "section"].join(" ")}>
				<div className={"MaxWidthWrapper"}>
					<div className={styles.procedimentos} id="procedimentos">
						<h2>Procedimentos</h2>
						<div className={styles.content}>
							<ol className={styles.lista}>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "0ms !important" }}
								>
									<b>Verificar o prazo</b> no calendário da UESC para esse
									procedimento.
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "100ms !important" }}
								>
									<b>Verificar</b> se seu aproveitamento <b>enquadra-se</b> no
									regimento da UESC, Capítulo VI. O regimento pode ser encontrado{" "}
									<a
										target="_blank"
										href="http://www.uesc.br/a_uesc/regimento.pdf"
									>
										clicando aqui.
									</a>
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "200ms !important" }}
								>
									Caso esteja no prazo, ir ao protocolo geral da UESC munido dos{" "}
									<b>seguintes documentos</b>:
								</li>

								<ol type="a">
									<li
										className={styles.scrollAnimation}
										style={{ transitionDelay: "300ms !important;" }}
									>
										<b> Ementa e conteúdo programático </b> da disciplina que
										cursou, <b>carimbado e assinado</b> pelo Departamento do
										curso ou secretaria acadêmica da IES de origem.
									</li>
									<li
										className={styles.scrollAnimation}
										style={{ transitionDelay: "400ms !important;" }}
									>
										<b>Histórico Escolar carimbado e assinado</b> pelo setor
										competente, constando a disciplina cursada, a nota final,
										frequência e situação (aprovado).
									</li>
									<li
										className={styles.scrollAnimation}
										style={{ transitionDelay: "500ms !important;" }}
									>
										Protocolar o <b>pedido de aproveitamento</b> de estudos da
										disciplina cursada para a disciplina pleiteada, indicando{" "}
										<b>&quot;código e nome da disciplina&quot;</b>.
									</li>
								</ol>

								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "600ms !important" }}
								>
									Quando o requerimento chegar ao COLCIC,{" "}
									<b>será enviado a um professor da área</b> a qual a disciplina
									pertence, para ser emitido parecer de deferimento, respeitando o
									regimento da UESC.
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "700ms !important" }}
								>
									Quando o COLCIC receber o parecer do professor,
									<b>encaminhará o processo à SECREGE</b> para registros do
									aproveitamento de estudos no sistema, ou não, conforme
									deferimento no parecer. <b>Após essa etapa</b>, o aluno pode{" "}
									<b>procurar o COLCIC</b> para informações.
								</li>
								<li
									className={styles.scrollAnimation}
									style={{ transitionDelay: "800ms !important" }}
								>
									A tramitação do processo pode durar <b>de 15 dias a 1 mês</b>.
								</li>
							</ol>
							<div className={styles.imageWrapper}>
								<Image src={MainImage} alt="Astronauta" width={300} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
