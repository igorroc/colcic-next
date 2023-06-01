import { Button } from "@/components/Button"
import Image from "next/image"

import styles from "./page.module.css"

import Rocket from "/public/rocket.png"
import CX from "/public/softwares/cx.png"
import RX from "/public/softwares/rx.png"
import RSX from "/public/softwares/rsx.png"
import OracleDatabase from "/public/softwares/oracle_database.png"
import OracleJava from "/public/softwares/oracle_java.png"
import Interbase from "/public/softwares/interbase.png"
import Intel from "/public/softwares/intel.png"

export const metadata = {
	title: "Licenças acadêmicas de softwares",
}

const softwares = [
	{
		img: CX,
		nome: "Embarcadero C++ Builder",
		descricao:
			"IDE para desenvolvimento no ambiente Windows, Android, IOS. Codificação, depuração, teste e design para implantação em desktops e plataformas móveis.",
	},
	{
		img: CX,
		nome: "Embarcadero Delphi Builder",
		descricao:
			"IDE com linguagem object pascal para desenvolvimento Windows, Android, IOS, Linux. Inclui bibliotecas para desenvolvimento rápido com banco de dados para web, desktop, mobile, aplicações híbridas.",
	},
	{
		img: OracleDatabase,
		nome: "Oracle Database, Big Data, BI",
		descricao:
			"Experiência prática com diversas ferramentas para gerenciamento de dados e serviços da nuvem, bancos de dados, data warehousing e data analytics. Banco de Dados Oracle, MySQL, NoSQL, Cloud Service",
	},
	{
		img: OracleJava,
		nome: "Oracle Java",
		descricao:
			"Ferramentas para desenvolvimento e serviço para IoT, Data mining, Machine learning, microservice",
	},
	{
		img: RX,
		nome: "Embarcadero RAD Studio",
		descricao:
			"IDE de propósito geral para programação de aplicação para ambientes windows, linux, android, IOS, usando C++ e object pascal. ",
	},
	{
		img: RSX,
		nome: "Embarcadero RAD Server",
		descricao:
			"Servidor de aplicativos para ambientes de aplicações windows, plataformas web e mobile híbridos, de aplicativos Delphi e C++Builder, em REST/JSON e IoT, semelhante ao Apache e IIS.",
	},
	{
		img: Interbase,
		nome: "Embarcadero InterBase",
		descricao:
			"Gerenciador para Banco de dados SQL, escalável, utilizável em ambientes Windows, Linux, macOS, iOS and Android.",
	},
	{
		img: Intel,
		nome: "Intel System Studio",
		descricao:
			"IDE para próposito geral com linguagens C e C++, para programação de aplicações para plataformas desktop, mobile nativa Android e híbrida, web. Com aplicação em OpenCL, IoT, processamento gráfico.",
	},
]

export default function Licencas() {
	return (
		<main>
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
		</main>
	)
}
