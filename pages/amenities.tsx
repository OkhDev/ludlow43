import Head from "next/head"
import { Carousel } from "../components/Carousel"
import { amenitiesFeatures } from "../constants"

export default function Amenities() {
	return (
		<>
			<Head>
				<title>Amenities</title>
				<meta name='description' content='' />
			</Head>
			<div className='mt-24 mx-auto'>
				<Carousel />
			</div>
			<div className='flex lg:flex-row flex-col gap-12 justify-evenly w-full m-auto max-w-7xl md:my-36 my-20 px-6 md:px-12'>
				{amenitiesFeatures.map((amenities, i) => (
					<div key={i} className='w-auto max-w-[27rem] h-max break-normal'>
						<h2 className='uppercase font-extrabold text-3xl mb-4 md:text-start'>
							{amenities.title}
						</h2>
						<ul className='ml-6 list-none font-serif text-xl space-y-2'>
							{amenities.list.map((info, i) => (
								<li className='leading-loose' key={i}>
									&middot; {info}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</>
	)
}
