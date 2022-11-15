import dynamic from "next/dynamic"
import Head from "next/head"
import AmenitiesDesc from "../components/Amenities/AmenitiesDesc"

const DynamicCarousel = dynamic(
	() => import("../components/Amenities/Carousel"),
	{ ssr: true }
)

export default function Amenities() {
	return (
		<>
			<Head>
				<title>Amenities</title>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta
					name='description'
					content='Building and apartment features of the ludlow 43 building include many things from 24 hour fitness, free high speed wifi, to stainless steel appliances and all utilities necessary for your stay.'
				/>
			</Head>

			<DynamicCarousel />

			<AmenitiesDesc />
		</>
	)
}
