import styles from "./private.module.css"

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
	return <div className={styles.markdown}>{children}</div>
}
