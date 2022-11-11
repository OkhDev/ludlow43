import dynamic from "next/dynamic"
import Head from "next/head"
import Image from "next/image"
import { neighborhoodDesc } from "../constants"

const DynamicEvents = dynamic(() => import("../components/EventLinks"))

export default function Neighborhood() {
	return (
		<>
			<Head>
				<title>Neighborhood</title>
				<meta name='description' content='' />
			</Head>

			<div className='mt-24 mx-auto'>
				<div className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-full'>
					<Image
						src='/images/neighborhood.jpeg'
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

					<div className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-full'>
						<p className='z-10 absolute top-0 left-0 bg-white px-5 py-3.5 rounded-br-lg rounded-tl-lg font-bold text-xl md:text-2xl drop-shadow-md'>
							Bus Routes
						</p>
						<Image
							src='/images/bus-routes.png'
							alt='map image of bus routes'
							className='custom-img rounded-lg drop-shadow-sm'
							sizes='100vw'
							fill
						/>
					</div>
				</div>
			</div>
		</>
	)
}
