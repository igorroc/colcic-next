import "../globals.css"

import { Montserrat } from "next/font/google"
const montserrat = Montserrat({ subsets: ["latin"] })

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { GoTop } from "@/components/GoTop"

export const metadata = {
	title: {
		default: "Colegiado de Computação",
		template: "%s | COLCIC",
	},
	description:
		"O Colegiado de Curso de Ciência da Computação é órgão da administração setorial de deliberação coletiva, supervisão e coordenação didático-pedagógica do curso Ciência da Computação e integra a estrutura da Universidade Estadual de Santa Cruz.",
	keywords:
		"colegiado, computação, uesc, ciência, colcic, computacao, ciencia, ti, tecnologia, informacao, informação",
	icons: "favicon.ico",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br" className={montserrat.className}>
			<body>
				<Header />
				<GoTop />
				{children}
				<Footer />
			</body>
		</html>
	)
}