import Image from "next/image"
import styles from "./page.module.css"

import IconCalendar from "/public/icon_calendar.png"

import { calendar } from "@/changeable/calendario-reunioes"

export const metadata = {
	title: "Calendário de reuniões",
}

export default function Calendario() {
	return (
		<>
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
							<Image src={IconCalendar} alt="Ilustração de um calendário em 3d" />
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
		</>
	)
}
