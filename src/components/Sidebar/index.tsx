"use client"

import { LOCAL_STORAGE_KEY } from "@/constants/storage"
import { getCurrentUser } from "@/hooks/users"
import Image from "next/image"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"
import React from "react"
import { AiFillClockCircle } from "react-icons/ai"

import { FaCog, FaNewspaper, FaUserFriends } from "react-icons/fa"
import { MdDashboard, MdLogout } from "react-icons/md"

import styles from "./sidebar.module.css"

const sideNavList = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: <MdDashboard />,
	},
	{
		title: "Publicações",
		href: "/posts",
		icon: <FaNewspaper />,
	},
	{
		title: "Usuários",
		href: "/users",
		icon: <FaUserFriends />,
		isAdmin: true,
	},
	{
		title: "Aprovar Publicações",
		href: "/posts/approve",
		icon: <AiFillClockCircle />,
		isAdmin: true,
	},
]

const sideNavListSecondary = [
	{
		title: "Configurações",
		href: "/settings",
		icon: <FaCog />,
	},
	{
		title: "Sair",
		href: "/logout",
		icon: <MdLogout />,
	},
]

export default function SideBar() {
	const pathname = usePathname()

	const userToken = window.localStorage.getItem(`${LOCAL_STORAGE_KEY}user-token`)

	if (!userToken) {
		redirect("/login")
	}

	const user = getCurrentUser(userToken)

	return (
		<aside className={styles.side}>
			<div className={styles.actions}>
				{sideNavList.map((item, index) =>
					item.isAdmin && !user.isAdmin ? null : (
						<Link
							href={item.href}
							className={styles.button}
							title={item.title}
							key={index}
							data-active={pathname == item.href}
						>
							{item.icon}
						</Link>
					)
				)}
			</div>
			<div className={styles.actions}>
				<div className={styles.userPhoto} title={user.name}>
					<Image src={user.photo} alt={"Foto de perfil"} />
				</div>
				{sideNavListSecondary.map((item, index) => (
					<Link
						href={item.href}
						className={styles.button}
						title={item.title}
						key={index}
						data-active={pathname == item.href}
					>
						{item.icon}
					</Link>
				))}
			</div>
		</aside>
	)
}
