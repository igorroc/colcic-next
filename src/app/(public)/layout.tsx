import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { GoTop } from "@/components/GoTop"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main id="main-content">{children}</main>
			<GoTop />
			<Footer />
		</>
	)
}
