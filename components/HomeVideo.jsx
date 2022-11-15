"use client"

import { Video, CloudinaryContext } from "cloudinary-react"
import { useRef } from "react"

function HomeVideo() {
	const videoRef = useRef(null)
	return (
		<main className='mt-24'>
			<CloudinaryContext cloud_name='dbdkvu5pi'>
				<Video
					publicId='ludlow43_qzcemi'
					secure
					autoPlay
					muted
					loop
					controls
					ref={videoRef}
					className='w-screen cursor-pointer select-none'
				/>
			</CloudinaryContext>
		</main>
	)
}

export default HomeVideo
