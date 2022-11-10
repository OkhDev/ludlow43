import Image from "next/image"
import Link from "next/link"
import React from "react"
import { navLinks } from "../constants"

const Navbar = () => {
	const arr = navLinks.length

	return (
		<nav className='fixed top-0 left-0 z-50 flex h-28 px-6 -mb-24 tracking-wide select-none bg-black w-full'>
			<div className='relative flex items-center justify-between w-full m-auto max-w-7xl'>
				<Image
					src={"/images/main-logo.png"}
					alt={"ludlow43 logo"}
					width={220}
					height={64}
				/>
				<div className='hidden lg:flex gap-8'>
					{navLinks.map((navLinks, index) => {
						const { link, name } = navLinks
						return (
							<>
								<ul
									key={index}
									className='text-white text-xl font-medium w-max font-sans-serif'
								>
									<li>
										<Link href={link}>{name}</Link>
									</li>
								</ul>
							</>
						)
					})}
				</div>
			</div>
		</nav>
	)
}

export default Navbar
