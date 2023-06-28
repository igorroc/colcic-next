import { Button } from "@/components/Button"
import Image from "next/image"

import styles from "./page.module.css"

import Rocket from "/public/rocket.png"

import { softwares } from "@/changeable/licencas-softwares"

export const metadata = {
	title: "Licenças acadêmicas de softwares",
}


export default function Licencas() {
	return (
		<>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h1>
								Licenças acadêmicas <br />
								<b>de Softwares</b>
							</h1>
							<p>
								São convênios entre a UESC/Colegiado de Ciência da Computação e
								proprietários de licenças de software - ferramentas para programação
								e ambientes de desenvolvimento de software (IDE), que dispõem seus
								produtos para o ambiente universitário, no propósito de auxiliar o
								processo de ensino-aprendizado. Essas licenças, em geral, são
								direcionadas para{" "}
								<b>
									produção de aplicações voltadas para treinamento, aplicações
									acadêmicas, pesquisas e propósitos não comerciais.
								</b>
							</p>
							<p>
								Caso as licenças não estejam disponíveis nos Labs. entrar em contato
								com <a href="mailto:colciclab@uesc.br">colciclab@uesc.br</a>
							</p>
							<Button label="Ver softwares" type="primary" href="#lista" />
						</div>
						<div className={styles.mainContentPhoto}>
							<Image src={Rocket} alt="Ilustração 3d de um foguete decolando" />
						</div>
					</div>
				</div>
			</section>
			<section data-variant className={["section", styles.pointedSection].join(" ")}>
				<div className={"MaxWidthWrapper"}>
					<div id={styles.lista}>
						<h2>Lista de Softwares</h2>
						<div id={styles.listaSoftwares}>
							{softwares.map((software, index) => (
								<div key={index} className={styles.card}>
									<Image
										src={software.img}
										alt={`Logo ${software.nome}`}
										height={100}
									/>
									<h2>{software.nome}</h2>
									<p>{software.descricao}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
