import type { AppProps } from "next/app"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"
import "../styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	)
}
