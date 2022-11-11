import Head from "next/head"
import Image from "next/image"

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
						src={"/images/neighborhood.jpeg"}
						alt={"neighborhood"}
						fill
						className='custom-img'
						sizes='100vw'
						priority
					/>
				</div>
			</div>
		</>
	)
}
