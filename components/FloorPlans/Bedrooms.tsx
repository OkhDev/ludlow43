import Image from "next/image"
import { bedrooms } from "../../constants/index"
const FloorPlans = () => {
	return (
		<div className='flex md:flex-row flex-col flex-wrap justify-evenly mx-auto gap-16 py-16 w-full'>
			{bedrooms.map((bedroom, i) => (
				<div
					key={i}
					className='flex-1 basis-1/3 flex-col m-auto justify-center items-center drop-shadow-md'
				>
					<Image
						src={`/images/floor-plans/${i + 1}bed.jpeg`}
						alt={`${i} bedroom`}
						width={370}
						height={260}
						className='m-auto rounded-t-xl p-6 bg-white cursor-pointer select-none w-full'
					/>
					<div className='flex flex-col justify-center mx-auto text-white bg-black text-left w-full rounded-b-xl px-8 py-8 gap-4'>
						<h3 key={i} className='text-2xl font-bold leading-loose uppercase'>
							{bedroom.title}
						</h3>
						<hr className='border-1 border-white/50' />
						<div className='font-serif text-lg leading-loose'>
							{bedroom.list.map((list, i) => (
								<p key={i} className=''>
									&middot; {list}
								</p>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default FloorPlans
