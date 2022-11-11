import Head from "next/head"
import dynamic from "next/dynamic"
import { Carousel } from "../components/Carousel"

const DynamicDesc = dynamic(() => import("../components/AmenitiesDesc"))

export default function Amenities() {
	return (
		<>
			<Head>
				<title>Amenities</title>
				<meta
					name='description'
					content='Building and apartment features of the ludlow 43 building include many things from 24 hour fitness, free high speed wifi, to stainless steel appliances and all utilities necessary for your stay.'
				/>
			</Head>
			<div className='mt-24 mx-auto'>
				<Carousel />
			</div>
			<DynamicDesc />
		</>
	)
}
