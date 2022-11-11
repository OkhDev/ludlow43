import Image from "next/image"

function BusRoutes() {
	return (
		<div className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-full'>
			<p className='z-10 absolute top-0 left-0 bg-white px-5 py-3.5 rounded-br-lg rounded-tl-lg font-bold text-xl md:text-2xl drop-shadow-md'>
				Bus Routes
			</p>
			<Image
				src='/images/bus-routes.webp'
				alt='map image of bus routes'
				className='custom-img rounded-lg drop-shadow-sm'
				sizes='100vw'
				fill
			/>
		</div>
	)
}

export default BusRoutes
