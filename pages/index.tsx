import Head from "next/head"
import dynamic from "next/dynamic"

const DynamicVideo = dynamic(() => import("../components/HomeVideo"), {
	ssr: true,
})

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
				<meta
					http-equiv='Content-Security-Policy'
					content='upgrade-insecure-requests'
				/>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta
					name='description'
					content='You are greeted with a video dedicated to show what Ludlow43 is capable of fulfilling for you and the commodities it provides to the people within the apartment.'
				/>
			</Head>

			<DynamicVideo />
		</>
	)
}
