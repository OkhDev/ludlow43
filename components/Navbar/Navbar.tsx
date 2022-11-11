import NavbarLinks from "./NavbarLinks"

const Navbar = () => {
	return (
		<nav className='fixed top-0 left-0 z-50 flex h-24 px-6 -mb-24 tracking-wide select-none bg-black w-full'>
			<div className='relative flex items-center justify-between w-full m-auto max-w-7xl'>
				<NavbarLinks />
			</div>
		</nav>
	)
}

export default Navbar
