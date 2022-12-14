import dynamic from "next/dynamic"
import Head from "next/head"
import { IoInformationCircleOutline } from "react-icons/io5"
import { disclaimerDesc } from "../constants"

const DynamicBedrooms = dynamic(
	() => import("../components/FloorPlans/Bedrooms"),
	{ ssr: true }
)

export default function FloorPlans() {
	return (
		<>
			<Head>
				<title>Floor Plans</title>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
				<meta
					name='description'
					content='Ludlow 43 different floorplans that are available for lease ranging from a studio apartment with a full bathroom to a 4 bedroom and 2 bathroom with a living room apartment.'
				/>
			</Head>

			<div className='mt-24 flex flex-col justify-center w-full m-auto max-w-7xl px-6 md:px-12 pt-8 md:pt-16'>
				<div className='flex flex-col justify-center w-full'>
					<h2 className='font-extrabold text-5xl mx-auto font-sans-serif text-center leading-snug mb-6'>
						Your Future Residence
					</h2>
					<div className='flex md:flex-row flex-col items-center p-6 md:p-8 bg-white rounded-lg w-fit border-2 border-black'>
						<span className='pr-0 md:pr-6 pb-4 md:pb-0'>
							<IoInformationCircleOutline size={42} />
						</span>
						<p className='leading-loose text-lg'>
							<span className='font-bold'>DISCLAIMER:</span> {disclaimerDesc}
						</p>
					</div>
				</div>
				<DynamicBedrooms />
			</div>
		</>
	)
}
