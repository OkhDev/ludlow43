import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { domAnimation, LazyMotion, motion } from "framer-motion"
import Image from "next/image"
import { useCallback } from "react"
import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io"

function Carousel() {
	const images = [1, 2, 3, 4]

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, skipSnaps: false, dragFree: false },
		[
			Autoplay({
				delay: 4000,
				stopOnInteraction: false,
				stopOnMouseEnter: false,
			}),
		]
	)
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])
	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<section className='mt-24 mx-auto relative overflow-hidden' ref={emblaRef}>
			<div className='flex'>
				{images.map((num, i) => (
					<div
						key={i}
						className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-full w-full h-full'
					>
						<Image
							src={`/images/slider/slider${num}.webp`}
							alt={`image ${num}`}
							fill
							className='custom-img'
							sizes='100vw'
							priority={i === 0}
						/>
					</div>
				))}
			</div>
			<LazyMotion features={domAnimation}>
				<motion.div
					whileTap={{ scale: 0.9 }}
					className='absolute w-16 h-full top-0 left-0 text-white cursor-pointer'
					onClick={scrollPrev}
				>
					<span className='z-20 flex h-full justify-center items-center m-auto'>
						<IoIosArrowDropleftCircle size={40} />
					</span>
				</motion.div>
				<motion.div
					whileTap={{ scale: 0.9 }}
					className='absolute w-16 h-full top-0 right-0 text-white cursor-pointer'
					onClick={scrollNext}
				>
					<span className='z-20 flex h-full justify-center items-center m-auto'>
						<IoIosArrowDroprightCircle size={40} />
					</span>
				</motion.div>
			</LazyMotion>
		</section>
	)
}

export default Carousel
