import "./globals.css"

import { Montserrat } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "@/components/AuthProvider"
import { PostsProvider } from "@/hooks/posts"
import { UsersProvider } from "@/hooks/users"

const montserrat = Montserrat({ subsets: ["latin"] })

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
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://colcic.uesc.br",
		title: "Colegiado de Computação",
		description:
			"O Colegiado de Curso de Ciência da Computação é órgão da administração setorial de deliberação coletiva, supervisão e coordenação didático-pedagógica do curso Ciência da Computação e integra a estrutura da Universidade Estadual de Santa Cruz.",
		images: [
			{
				url: "https://colcic.uesc.br/assets/banner.png",
				width: 1200,
				height: 917,
				alt: "Site do Colegiado de Computação da UESC",
			},
		],
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-br" className={montserrat.className}>
			<body>
				<AuthProvider>
					<PostsProvider>
						<UsersProvider>
							<div id="toasterWrapper">
								<Toaster />
							</div>
							{children}
						</UsersProvider>
					</PostsProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
