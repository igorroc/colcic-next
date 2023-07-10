"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"

import { useUserToken } from "@/utils/handleUserToken"
import useUser from "@/hooks/users"

import { AiFillClockCircle, AiFillHome } from "react-icons/ai"
import { FaCog, FaNewspaper, FaUserAlt, FaUserFriends } from "react-icons/fa"
import { MdDashboard, MdLogout } from "react-icons/md"

import styles from "./sidebar.module.css"
import { TUser } from "@/types/user"

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
	const pathname = usePathname()
	const { token } = useUserToken()
	const { user, getCurrentUser } = useUser({ token })
	const [currentUser, setCurrentUser] = useState<TUser>()

	useEffect(() => {
		if (!token) {
			redirect("/login")
		}

		if (sideNavList.find((item) => item.href == pathname)?.isAdmin && user?.type != "admin") {
			redirect("/dashboard")
		}

		async function fetchData() {
			const user = await getCurrentUser(token)

			if (user) {
				setCurrentUser(user)
			}
		}

		fetchData()
		// eslint-disable-next-line
	}, [token, pathname, user?.type])

	return (
		<aside className={styles.side}>
			<div className={styles.actions}>
				{sideNavList.map((item, index) =>
					item.isAdmin && currentUser?.type != "admin" ? null : (
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
				{currentUser?.profilePhoto && (
					<div className={styles.userPhoto} title={currentUser.name}>
						{/* eslint-disable-next-line */}
						<img
							src={currentUser?.profilePhoto}
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
