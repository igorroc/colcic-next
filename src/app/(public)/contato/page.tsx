import { Button } from "@/components/Button"
import styles from "./page.module.css"

import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md"

import World from "/public/world.png"
import Contact from "/public/contact.png"
import Image from "next/image"
import ContactForm from "@/components/ContactForm"

export const metadata = {
	title: "Contato",
}

export default function Contato() {
	return (
		<>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContentPhoto}>
							<Image src={Contact} alt="Ilustração 3d de um estudante com mochila nas costas, segurando o seu celular e enviando uma mensagem" />
						</div>
						<div className={styles.mainContent}>
							<h1>Fale com o COLCIC</h1>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={[styles.mainWrapper, styles.noGap].join(" ")}>
						<div className={styles.contact}>
							<h2>Encontre-nos</h2>
							<div className={styles.contactWrapper}>
								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<MdLocationPin />
									</div>

									<div className={styles.contactInfo}>
										<div className={styles.title}>Endereço</div>
										<div className={styles.content}>
											<p>Pavilhão de Ciências Exatas e Tecnológicas</p>
											<p>UESC, Ilhéus-Ba</p>
										</div>
									</div>
								</div>
								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<MdEmail />
									</div>

									<div className={styles.contactInfo}>
										<div className={styles.title}>E-mail</div>
										<div className={styles.content}>
											<div>
												<a href="mailto:colcic@uesc.br">colcic@uesc.br</a>
												<span>(Colegiado)</span>
											</div>
											<div>
												<a href="mailto:colciclab@uesc.br">
													colciclab@uesc.br
												</a>
												<span>(Funcionamento de Laboratórios)</span>
											</div>
										</div>
									</div>
								</div>

								<div className={styles.contactItem}>
									<div className={styles.contactIcon}>
										<MdPhone />
									</div>

									<div className={styles.contactInfo}>
										<div className={styles.title}>Telefone</div>
										<div className={styles.content}>
											<div>
												<a href="tel:7336805110">(73) 3680-5110</a>
												<span>(Secretária)</span>
											</div>
											<div>
												<a href="tel:7336805290">(73) 3680-5290</a>
												<span>(Laboratórios)</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={[styles.mainContentPhoto, styles.contactPhoto].join(" ")}>
							<Image src={World} alt="Ilustração 3d do globo terrestre, com algumas marcações em continentes diversos" />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
