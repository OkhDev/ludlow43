import type { AppProps } from "next/app"
// import Footer from "../components/Footer"
import Navbar from "../components/Navbar/Navbar"
import "../styles/globals.css"
import "@fontsource/poiret-one/400.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/crimson-text/400.css"
import dynamic from "next/dynamic"

const DynamicFooter = dynamic(() => import("../components/Footer"))

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<DynamicFooter />
		</>
	)
}
