"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"

import { AiFillClockCircle, AiFillHome } from "react-icons/ai"
import { FaCog, FaNewspaper, FaUserAlt, FaUserFriends } from "react-icons/fa"
import { MdDashboard, MdLogout } from "react-icons/md"

import styles from "./sidebar.module.css"
import { useAuth } from "../AuthProvider"

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
		href: "/approve",
		icon: <AiFillClockCircle />,
		isAdmin: true,
	},
	{
		title: "Configurações",
		href: "/settings",
		icon: <FaCog />,
		isAdmin: true,
	},
]

const sideNavListSecondary = [
	{
		title: "Perfil",
		href: "/profile",
		icon: <FaUserAlt />,
	},
	{
		title: "Página inicial",
		href: "/",
		icon: <AiFillHome />,
	},
	{
		title: "Sair",
		href: "/logout",
		icon: <MdLogout />,
	},
]

export default function SideBar() {
	const { authUser } = useAuth()
	const pathname = usePathname()

	useEffect(() => {
		if (authUser) {
			if ("error" in authUser) {
				redirect("/logout")
			}

			if (
				sideNavList.find((item) => item.href == pathname)?.isAdmin &&
				authUser.type != "admin"
			) {
				redirect("/dashboard")
			}
		}
	}, [pathname, authUser])

	if (authUser && "error" in authUser) return null

	return (
		<aside className={styles.side}>
			<div className={styles.actions}>
				{sideNavList.map((item, index) =>
					item.isAdmin && authUser?.type != "admin" ? null : (
						<Link
							href={item.href}
							className={styles.button}
							title={item.title}
							key={index}
							data-active={pathname == item.href}
							data-inside={pathname.includes(item.href)}
						>
							{item.icon}
						</Link>
					)
				)}
			</div>
			<div className={styles.actions}>
				{authUser?.profilePhoto && (
					<div className={styles.userPhoto} title={authUser.name}>
						{/* eslint-disable-next-line */}
						<img
							src={authUser?.profilePhoto}
							alt={"Foto de perfil"}
							width={100}
							height={100}
						/>
					</div>
				)}
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
