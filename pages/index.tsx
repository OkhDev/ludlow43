import Head from "next/head"
import dynamic from "next/dynamic"

const DynamicVideo = dynamic(() => import("../components/HomeVideo"))

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta name='description' content='' />
			</Head>
			<DynamicVideo />
		</>
	)
}
