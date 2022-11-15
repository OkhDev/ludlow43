import "@fontsource/crimson-text/400.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/poiret-one/400.css"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import "../styles/globals.css"

const DynamicNavBar = dynamic(() => import("../components/Navbar/Navbar"), {
	ssr: true,
})
const DynamicFooter = dynamic(() => import("../components/Footer"), {
	ssr: true,
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DynamicNavBar />
			<Component {...pageProps} />
			<DynamicFooter />
		</>
	)
}
