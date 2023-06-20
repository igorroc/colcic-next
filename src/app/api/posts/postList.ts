import defaultBody from "@/utils/defaultPostBody"

import banner from "/public/banner.png"
import avatar from "/public/igor.png"
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
			avatar: avatar,
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
		banner: banner,
	},
]
