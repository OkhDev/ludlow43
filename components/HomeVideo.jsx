import { Video, CloudinaryContext } from "cloudinary-react"
import { useRef } from "react"

function HomeVideo() {
	const videoRef = useRef(null)
	return (
		<CloudinaryContext cloud_name='dbdkvu5pi'>
			<Video
				publicId='ludlow43_qzcemi'
				autoPlay
				muted
				loop
				controls
				ref={videoRef}
				className='w-screen cursor-pointer select-none'
			/>
		</CloudinaryContext>
	)
}

export default HomeVideo
