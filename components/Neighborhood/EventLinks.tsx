import { motion } from "framer-motion"
import Link from "next/link"
import { events } from "../../constants"

function EventLinks() {
	return (
		<div className='flex justify-center flex-wrap gap-12 py-8'>
			{events.map((event, i) => {
				const { title, href, Icon } = event
				return (
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						key={i}
					>
						<Link
							href={href}
							target='_blank'
							className='flex flex-col items-center justify-center p-8 bg-black rounded-lg w-48 h-48 text-center cursor-pointer drop-shadow-sm'
						>
							<div className='flex flex-col justify-center text-center w-full m-auto gap-4'>
								<span className='bg-white p-4 w-max rounded-full mx-auto'>
									<Icon size={36} />
								</span>
								<h3 className='text-white text-lg font-bold'>{title}</h3>
							</div>
						</Link>
					</motion.div>
				)
			})}
		</div>
	)
}

export default EventLinks
