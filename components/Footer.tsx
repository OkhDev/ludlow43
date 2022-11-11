import { useRouter } from "next/router"
import Link from "next/link"

const Footer = () => {
	const router = useRouter()
	return (
		<footer className='w-full bg-black py-8'>
			<div className='relative flex md:flex-row flex-col justify-between items-center px-6 md:px-12 max-w-7xl w-full gap-8 m-auto text-white'>
				<p
					className='text-4xl font-logo text-white cursor-pointer'
					onClick={() => router.push("/")}
				>
					ludlow 43
				</p>
				<div className='flex md:flex-row flex-col gap-8 text-center'>
					<Link href={"/policy"}>Privacy Policy</Link>
					<p>&#169; Island Development Group</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
