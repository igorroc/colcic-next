import defaultBody from "@/utils/defaultPostBody"

import PostBanner5G from "/public/postBanner1.png"
import PostBannerMeta from "/public/postBanner2.png"
import PostBannerSeguranca from "/public/postBanner3.png"

import PostAuthorPicture1 from "/public/igor.png"
import PostAuthorPicture2 from "/public/people.png"
import { TPost } from "@/types/post"

export const postList: TPost[] = [
	{
		id: 1,
		slug: "metaverso-a-nova-fronteira-da-internet",
		title: "Metaverso: a nova fronteira da internet!",
		body: defaultBody,
		description:
			"Nos últimos anos, o termo 'Metaverso' tem sido cada vez mais utilizado para descrever um futuro em que as fronteiras entre o mundo físico e o virtual se tornam cada vez mais borradas. Mas o que exatamente é o Metaverso e como ele está mudando a forma como interagimos com o mundo virtual?",
		author: {
			id: 1,
			name: "Igor Rocha",
			avatar: PostAuthorPicture1,
		},
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
		author: {
			id: 2,
			name: "John Doe",
			avatar: PostAuthorPicture2,
		},
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
		author: {
			id: 1,
			name: "Igor Rocha",
			avatar: PostAuthorPicture1,
		},
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
		author: {
			id: 2,
			name: "Laura Santos",
			avatar: PostAuthorPicture1,
		},
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
		author: {
			id: 3,
			name: "Gabriel Silva",
			avatar: PostAuthorPicture1,
		},
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
	{
		id: 6,
		slug: "o-potencial-da-internet-das-coisas-iot",
		title: "O Potencial da Internet das Coisas (IoT)",
		body: defaultBody,
		banner: PostBanner5G,
		description:
			"Nesta postagem, exploramos o potencial da Internet das Coisas (IoT) e como ela está transformando nossas vidas. Discutimos como os dispositivos conectados podem interagir entre si, coletar dados e fornecer insights úteis. Apresentamos exemplos práticos de aplicativos da IoT em áreas como casa inteligente, saúde e cidades inteligentes. Também abordamos as preocupações de segurança e privacidade associadas à IoT e como esses desafios podem ser enfrentados. Prepare-se para descobrir um mundo cada vez mais conectado e inteligente.",
		author: {
			id: 3,
			name: "Gabriel Silva",
			avatar: PostAuthorPicture2,
		},
		created_at: "2023-06-20T14:45:00.000Z",
		categories: [
			{
				id: 7,
				name: "Internet das Coisas",
			},
			{
				id: 8,
				name: "Transformação",
			},
		],
	},
]
