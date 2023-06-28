import { BsDiscord, BsInstagram, BsTelegram } from "react-icons/bs"

import Tecno from "/public/entidades/tecno.png"
import CACIC from "/public/entidades/cacic.png"
import NIT from "/public/entidades/nit.png"
import CCAM from "/public/entidades/ccam.png"
import PPGMC from "/public/entidades/ppgmc.png"
import SBC from "/public/entidades/sbc.png"
import { MdCalendarMonth, MdLibraryBooks } from "react-icons/md"
import { TbLetterS } from "react-icons/tb"

export const entidades = [
	{
		image: CCAM,
		title: "CCAM",
		description: "Núcleo de Inovação Tecnológica",
		link: "https://nit.uesc.br",
	},
	{
		image: Tecno,
		title: "TecnoJr",
		description: "Associação Empresa Júnior de Computação",
		link: "https://tecnojr.com.br",
	},
	{
		image: PPGMC,
		title: "PPGMC",
		description: "Programa de Pós-Graduação em Modelagem Computacional",
		link: "http://nbcgib.uesc.br/ppgmc/",
	},
	{
		image: CACIC,
		title: "CACIC",
		description: "Centro Acadêmico de Ciência da Computação",
		link: "https://www.instagram.com/cacicuesc/",
	},
	{
		image: NIT,
		title: "NIT",
		description: "Núcleo de Inovação e Tecnologia",
		link: "http://www.uesc.br/nucleos/nit/",
	},
	{
		image: SBC,
		title: "SBC",
		description: "Sociedade Brasileira de Computação",
		link: "https://sbc.org.br",
	},
]

export const redes = [
	{
		icon: <BsDiscord />,
		link: "https://discord.gg/7F2Q2tW",
		label: "Discord",
	},
	{
		icon: <BsTelegram />,
		link: "https://t.me/joinchat/AAAAAFJxjzY8Y0Y8Xy0X9Q",
		label: "Telegram",
	},
	{
		icon: <BsInstagram />,
		link: "https://www.instagram.com/colegiado_cc/",
		label: "Instagram",
	},
]

export const academicos = [
	{
		icon: <MdCalendarMonth />,
		title: "Horário 2023.2",
		description: "atualizado em 16/06/2023",
		target: "_blank",
		href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSLUIVH7DMLmD4vzATNGcSZJ_xXJo3Y6sUF_lFs-PlSYceFziosIYh30axEiTSNOlFCjC5IC-FYjQDO/pubhtml",
	},
	{
		icon: <MdCalendarMonth />,
		title: "Horário 2023.1",
		description: "final",
		target: "_blank",
		href: "https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vTPwwQGr5cDv971u7-buMs_gwN0wn9aui9l5FnkZECjlKo2SB7z6HJhNA9JLdB4F4CdlWwiYkT2bmP1/pubhtml",
	},
	{
		icon: <TbLetterS />,
		title: "SAGRES",
		target: "_blank",
		href: "http://www.prograd.uesc.br/PortalSagres/Acesso.aspx",
	},
	{
		icon: <MdLibraryBooks />,
		title: "Biblioteca",
		target: "_blank",
		href: "http://www.uesc.br/biblioteca/",
	},
]