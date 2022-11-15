import dynamic from "next/dynamic"
import Head from "next/head"
import Image from "next/image"
import { neighborhoodDesc } from "../constants"
import BusRoutes from "../components/Neighborhood/BusRoutes"

const DynamicEvents = dynamic(
	() => import("../components/Neighborhood/EventLinks"),
	{ ssr: true }
)

export default function Neighborhood() {
	return (
		<>
			<Head>
				<title>Neighborhood</title>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta
					name='description'
					content='The neighborhood around ludlow 43 has a ton of things to do.You will have access to movie theatres, an athletic field, coffee shops, and more.'
				/>
			</Head>

			<div className='mt-24 mx-auto'>
				<div className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-full w-full h-full'>
					<Image
						src='/images/neighborhood.webp'
						alt='neighborhood'
						fill
						className='custom-img'
						sizes='100vw'
						priority
					/>
				</div>
				<div className='flex flex-col w-full m-auto max-w-7xl my-8 md:my-16 px-6 md:px-12 gap-8'>
					<h2 className='font-extrabold text-5xl mx-auto font-sans-serif text-center leading-snug'>
						The Neighborhood
					</h2>
					<p className='font-serif text-2xl leading-loose'>
						{neighborhoodDesc}
					</p>

					<DynamicEvents />

					<BusRoutes />
				</div>
			</div>
		</>
	)
}
