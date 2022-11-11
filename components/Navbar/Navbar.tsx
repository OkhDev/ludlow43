import NavbarLinks from "./NavbarLinks"
import { useRouter } from "next/router"

const Navbar = () => {
	const router = useRouter()
	return (
		<nav className='fixed top-0 left-0 z-50 flex h-24 px-6 -mb-24 tracking-wide select-none bg-black w-full'>
			<div className='relative flex items-center justify-center lg:justify-between w-full m-auto max-w-7xl'>
				<h1
					className='text-5xl font-logo text-white cursor-pointer'
					onClick={() => router.push("/")}
				>
					ludlow 43
				</h1>

				<NavbarLinks />
			</div>
		</nav>
	)
}

export default Navbar
