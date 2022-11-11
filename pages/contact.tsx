import dynamic from "next/dynamic"
import Head from "next/head"
import Image from "next/image"
import { HiLocationMarker } from "react-icons/hi"
import { contact } from "../constants"

const DynamicForm = dynamic(() => import("../components/Form"))

export default function GetInTouch() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name='description' content='' />
			</Head>

			<div className='mt-24 flex flex-col justify-center w-full m-auto max-w-7xl px-6 md:px-12 pt-8 md:pt-16 gap-8'>
				<h2 className='font-extrabold text-5xl mx-auto font-sans-serif text-center leading-snug'>
					Contact Us
				</h2>
				<div className='flex md:flex-row flex-col gap-12 pb-20'>
					<div className='basis-1/2'>
						<DynamicForm />
					</div>
					<div className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-1/2'>
						<Image
							src='/images/contact.jpeg'
							alt='image of ludlow43'
							className='custom-img rounded-md drop-shadow-sm'
							fill
							priority
							sizes='100vw'
						/>
						<div className='flex md:flex-row flex-col mt-12'>
							<div className='flex flex-col px-8 m-auto gap-4 leading-loose'>
								<h4 className='font-bold text-xl text-center'>
									Management Office Information
								</h4>
								{contact.map((info, i) => {
									const { desc, Icon } = info
									return (
										<div
											key={i}
											className='inline-flex gap-4 items-center tracking-wide font-serif text-xl ml-6'
										>
											<Icon size={18} />
											<p>{desc}</p>
										</div>
									)
								})}
								<div className='inline-flex gap-4 tracking-wide font-serif text-xl ml-6'>
									<HiLocationMarker size={18} style={{ marginTop: 6 }} />
									<ul>
										<li>Ludlow 43</li>
										<li>12 S. 43rd Street</li>
										<li>Philadelphia, PA 19104</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
