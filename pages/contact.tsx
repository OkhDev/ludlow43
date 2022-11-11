import dynamic from "next/dynamic"
import Head from "next/head"
import Image from "next/image"

const DynamicForm = dynamic(() => import("../components/Form"), { ssr: false })
const DynamicManage = dynamic(() => import("../components/ManagementOffice"))

export default function GetInTouch() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta
					name='description'
					content='Contact support for ludlow 43 which includes a contact form along with the email, phone number, fax number, and building location.'
				/>
			</Head>

			<div className='mt-24 flex flex-col justify-center w-full m-auto max-w-7xl px-6 md:px-12 pt-8 md:pt-16 gap-8'>
				<h2 className='font-extrabold text-5xl mx-auto font-sans-serif text-center leading-snug'>
					Contact Us
				</h2>
				<div className='flex md:flex-row flex-col gap-12 pb-20'>
					<div className='basis-1/2'>
						<DynamicForm />
					</div>
					<div className='relative unset-img full-bleed flex-grow-0 flex-shrink-0 basis-1/2 w-full h-full'>
						<Image
							src='/images/contact.webp'
							alt='image of ludlow43'
							sizes='(max-width: 100vw) 100vw'
							className='custom-img rounded-md drop-shadow-sm select-none w-full'
							fill
							priority
						/>
						<DynamicManage />
					</div>
				</div>
			</div>
		</>
	)
}
