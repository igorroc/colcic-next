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
]
