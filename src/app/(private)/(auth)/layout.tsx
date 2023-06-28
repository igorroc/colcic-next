import SideBar from "@/components/Sidebar"

import styles from "./layout.module.css"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.customBody}>
			<SideBar />
			<main>{children}</main>
		</div>
	)
}
