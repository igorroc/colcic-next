import Image from "next/image"
import styles from "./page.module.css"

import IconCalendar from "/public/icon_calendar.png"

export const metadata = {
	title: "Calendário",
}

const calendar = [
	{
		mes: "Janeiro",
		diaDoMes: "28",
		diaDaSemana: "Quinta-feira",
	},
	{ mes: "Fevereiro", diaDoMes: 25, diaDaSemana: "Quinta-feira" },
	{ mes: "Março", diaDoMes: 29, diaDaSemana: "Segunda-feira" },
	{ mes: "Abril", diaDoMes: 27, diaDaSemana: "Terça-feira" },
	{ mes: "Maio", diaDoMes: 19, diaDaSemana: "Quarta-feira" },
	{ mes: "Junho", diaDoMes: 30, diaDaSemana: "Quarta-feira" },
	{ mes: "Julho", diaDoMes: 23, diaDaSemana: "Sexta-feira" },
	{ mes: "Agosto", diaDoMes: 31, diaDaSemana: "Terça-feira" },
	{ mes: "Setembro", diaDoMes: 20, diaDaSemana: "Segunda-feira" },
	{ mes: "Outubro", diaDoMes: 22, diaDaSemana: "Sexta-feira" },
	{ mes: "Novembro", diaDoMes: 18, diaDaSemana: "Quinta-feira" },
	{ mes: "Dezembro", diaDoMes: 15, diaDaSemana: "Quarta-feira" },
]

export default function Calendario() {
	return (
		<main>
			<section data-variant className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.mainWrapper}>
						<div className={styles.mainContent}>
							<h1>
								Calendário de <br />
								<b>Reuniões para 2022</b>
							</h1>
						</div>
						<div className={styles.mainContentPhoto}>
							<Image src={IconCalendar} alt="" />
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className={"MaxWidthWrapper"}>
					<div className={styles.calendario}>
						<h2>Calendário</h2>
						<div className={styles.centerTable}>
							<div className={styles.wrapperTable}>
								<div className={styles.table} id="tableCalendario">
									<div className={styles.header}>
										<h3>Mês</h3>
										<h3>Dia do mês</h3>
										<h3>Dia da semana</h3>
									</div>
									<div className={styles.content}>
										{calendar.map((item, index) => (
											<div className={styles.row} key={index}>
												<span>{item.mes}</span>
												<span>{item.diaDoMes}</span>
												<span>{item.diaDaSemana}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
