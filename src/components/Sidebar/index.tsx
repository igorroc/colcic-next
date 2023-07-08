"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect, usePathname } from "next/navigation"

import { useUserToken } from "@/utils/handleUserToken"
import { getCurrentUser } from "@/hooks/users"

import { AiFillClockCircle, AiFillHome } from "react-icons/ai"
import { FaCog, FaNewspaper, FaUserFriends } from "react-icons/fa"
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
	const [user, setUser] = useState<TUser>()

	useEffect(() => {
		if (!token) {
			redirect("/login")
		}

		async function getData() {
			const userRes: TUser = getCurrentUser(token)
			setUser(userRes)
		}

		getData()

		if (sideNavList.find((item) => item.href == pathname)?.isAdmin && user?.type != "admin") {
			redirect("/dashboard")
		}
	}, [token, pathname, user?.type])

	return (
		<aside className={styles.side}>
			<div className={styles.actions}>
				{sideNavList.map((item, index) =>
					item.isAdmin && user?.type != "admin" ? null : (
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
				{user?.profilePhoto && (
					<div className={styles.userPhoto} title={user.name}>
						<Image
							src={user?.profilePhoto}
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
