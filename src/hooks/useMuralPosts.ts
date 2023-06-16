import PostBanner2 from "/public/postBanner.png"
import PostBanner1 from "/public/postBanner1.png"
import PostBanner3 from "/public/postBanner3.png"
import PostAuthorPicture from "/public/igor.png"

const muralPosts = [
	{
		title: "A importância da cibersegurança em trabalho remoto",
		image: PostBanner3,
		categories: ["Segurança", "Inovação", "Tendências"],
		author: {
			name: "Igor Rocha",
			avatar: PostAuthorPicture,
		},
		created_at: "20/10/2021",
		description: `Com o aumento do trabalho remoto, a cibersegurança se tornou uma preocupação cada vez maior para empresas e indivíduos. Neste post, vamos explorar as principais ameaças à segurança cibernética no trabalho remoto, incluindo...`,
	},
	{
		title: "Metaverso: a nova fronteira da internet",
		image: PostBanner2,
		categories: ["Tecnologia", "Inovação", "Tendências"],
		author: {
			name: "Igor Rocha",
			avatar: PostAuthorPicture,
		},
		created_at: "20/10/2021",
		description: `Nos últimos anos, o termo 'Metaverso' tem sido cada vez mais
		utilizado para descrever um futuro em que as fronteiras entre o mundo
		físico e o virtual se tornam cada vez mais borradas. Mas o que
		exatamente é o Metaverso e como ele está mudando a forma como
		interagimos com o mundo virtual?`,
	},
	{
		title: "Por que a tecnologia 5G é uma revolução?",
		categories: ["Tecnologia", "Inovação", "Tendências"],
		image: PostBanner1,
		author: {
			name: "Igor Rocha",
			avatar: PostAuthorPicture,
		},
		created_at: "20/10/2021",
		description: `Neste post, vamos explorar como a tecnologia 5G está transformando a maneira como a internet das coisas (IoT) é usada. Vamos discutir as principais vantagens do 5G, incluindo velocidades de conexão mais rápidas, maior capacidade de rede e latência...`,
	},
]

export function getMuralPosts() {
	return muralPosts
}
