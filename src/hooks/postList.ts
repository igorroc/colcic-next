import defaultBody from "@/utils/defaultPostBody"

import PostBanner5G from "/public/fakedata/posts/5G.png"
import PostBannerMeta from "/public/fakedata/posts/metaverso.png"
import PostBannerSeguranca from "/public/fakedata/posts/seguranca.png"

import IgorIMG from "/public/fakedata/users/igor.png"
import BiaIMG from "/public/fakedata/users/bia.png"
import IsaacIMG from "/public/fakedata/users/isaac.png"
import LeoIMG from "/public/fakedata/users/leo.png"
import AdrianIMG from "/public/fakedata/users/adrian.png"

import { TPost } from "@/types/post"

export const postList: TPost[] = [
	{
		id: 1,
		slug: "metaverso-a-nova-fronteira-da-internet",
		title: "Metaverso: a nova fronteira da internet!",
		body: defaultBody,
		description:
			"Nos últimos anos, o termo 'Metaverso' tem sido cada vez mais utilizado para descrever um futuro em que as fronteiras entre o mundo físico e o virtual se tornam cada vez mais borradas. Mas o que exatamente é o Metaverso e como ele está mudando a forma como interagimos com o mundo virtual?",
		author_id: 1,
		created_at: "2023-01-01T00:00:00.000Z",
		categories: [
			{
				id: 1,
				name: "Tecnologia",
			},
			{
				id: 2,
				name: "React",
			},
		],
		banner: PostBannerMeta,
	},
	{
		id: 2,
		slug: "a-importancia-da-ciberseguranca-em-trabalho-remoto",
		title: "A importância da cibersegurança em trabalho remoto",
		body: defaultBody,
		description:
			"A postagem em markdown destaca a revolução da tecnologia 5G e por que ela é tão impactante. Com imagens ilustrativas, a descrição enfatiza as principais características do 5G, como velocidades superiores, latência ultrabaixa e capacidade de conexão massiva. Também menciona como o 5G impulsiona a inovação em vários setores, desde a medicina até a indústria automotiva. A postagem conclui incentivando os leitores a se prepararem para um futuro conectado e a abraçarem o poder transformador do 5G.",
		author_id: 2,
		created_at: "2020-05-05T00:00:00.000Z",
		categories: [
			{
				id: 1,
				name: "Tecnologia",
			},
			{
				id: 2,
				name: "Segurança",
			},
		],
		banner: PostBannerSeguranca,
	},
	{
		id: 3,
		slug: "por-que-a-tecnologia-5g-e-uma-revolucao",
		title: "Por que a tecnologia 5G é uma revolução?",
		body: defaultBody,
		description:
			"A postagem em markdown destaca a revolução da tecnologia 5G e por que ela é tão impactante. Com imagens ilustrativas, a descrição enfatiza as principais características do 5G, como velocidades superiores, latência ultrabaixa e capacidade de conexão massiva. Também menciona como o 5G impulsiona a inovação em vários setores, desde a medicina até a indústria automotiva. A postagem conclui incentivando os leitores a se prepararem para um futuro conectado e a abraçarem o poder transformador do 5G.",
		author_id: 3,
		created_at: "1999-12-12T00:00:00.000Z",
		categories: [
			{
				id: 1,
				name: "5G",
			},
			{
				id: 2,
				name: "Revolução",
			},
		],
		banner: PostBanner5G,
	},
	{
		id: 4,
		slug: "as-tendencias-em-inteligencia-artificial",
		title: "As tendências em Inteligência Artificial",
		body: defaultBody,
		description:
			"Nesta postagem, exploramos as principais tendências em Inteligência Artificial (IA). Discutimos como a IA está transformando diversas áreas, como saúde, finanças e transporte. Abordamos tópicos como aprendizado de máquina, redes neurais e algoritmos avançados. Além disso, destacamos o papel da ética na IA e as preocupações relacionadas à privacidade e segurança. Prepare-se para descobrir as últimas inovações e como a IA está moldando o futuro.",
		author_id: 4,
		created_at: "2023-06-15T10:30:00.000Z",
		categories: [
			{
				id: 3,
				name: "Inteligência Artificial",
			},
			{
				id: 4,
				name: "Tendências",
			},
		],
		banner: PostBanner5G,
	},
	{
		id: 5,
		slug: "realidade-aumentada-transformando-o-mundo",
		body: defaultBody,
		banner: PostBanner5G,
		title: "Realidade Aumentada: Transformando o Mundo",
		description:
			"Nesta postagem, exploramos o impacto da Realidade Aumentada (RA) na sociedade. Apresentamos exemplos de como a RA está sendo usada em diferentes setores, como educação, entretenimento e comércio. Discutimos as tecnologias subjacentes, como rastreamento de movimento e reconhecimento de objetos, que tornam possível a experiência imersiva da RA. Além disso, refletimos sobre o potencial futuro da RA e como ela pode mudar nossa forma de interagir com o mundo.",
		author_id: 5,
		created_at: "2023-06-20T14:45:00.000Z",
		categories: [
			{
				id: 5,
				name: "Realidade Aumentada",
			},
			{
				id: 6,
				name: "Transformação",
			},
		],
	},
]
