import Image from "next/image"
import Link from "next/link"
import React from "react"

import { MdLocationPin, MdEmail, MdPhone, MdFacebook } from "react-icons/md"

import styles from "./footer.module.css"

import LogoColcic from "/public/footerLogo.png"

export function Footer() {
	let currentYear = new Date().getFullYear()

	return (
		<footer id={styles.footer}>
			<div className={styles.footerWave}>
				<div className={styles.left}></div>
				<Link className={styles.footerLogo} href="#top">
					<div className={styles.logo}>
						<Image src={LogoColcic} alt="Logo do curso de Ciência da Computação" />
					</div>
				</Link>
				<div className={styles.right}></div>
			</div>
			<div className="MaxWidthWrapper">
				<div className={styles.footerWrapper}>
					<div className={styles.footerFloat}>
						<div className={styles.footerContent}>
							<h1>Contato</h1>
							<ul>
								<Link target="_blank" href="https://goo.gl/maps/FKcmwBJ76WYrLQSj8">
									<MdLocationPin />
									<span>UESC, Pavilhão do DCET, 1º andar</span>
								</Link>
								<Link target="_blank" href="mailto:colcic@uesc.br">
									<MdEmail />
									<span> colcic@uesc.br </span>
								</Link>
								<Link target="_blank" href="tel:7336805110">
									<MdPhone />
									<span> (73) 3680-5110 </span>
								</Link>
								<Link
									target="_blank"
									href="https://www.facebook.com/groups/colcic/"
								>
									<MdFacebook />
									<span> Facebook </span>
								</Link>
							</ul>
						</div>
						<div className={styles.footerContent}>
							<h1>Endereço</h1>
							<Link
								target="_blank"
								href="https://goo.gl/maps/FKcmwBJ76WYrLQSj8"
								className={styles.linkEndereco}
							>
								<p>UNIVERSIDADE ESTADUAL DE SANTA CRUZ - UESC</p>
								<p>Campus Soane Nazaré de Andrade</p>
								<p>Rodovia Jorge Amado, Km 16, Salobrinho</p>
								<p>CEP 45662-900. Ilhéus-Bahia</p>
							</Link>
						</div>
					</div>

					<div className={styles.footerCopy}>
						<p>© {currentYear} - Todos os direitos reservados | COLCIC</p>
						<p>
							Desenvolvido por{" "}
							<Link target="_blank" href="https://ilrocha.com" id={styles.copyIgor}>
								Igor Rocha
							</Link>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
