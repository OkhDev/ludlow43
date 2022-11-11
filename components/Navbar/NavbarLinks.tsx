import { navLinks } from "../../constants/index"
import { motion } from "framer-motion"
import Link from "next/link"

const HoverOverLinks = {
	rest: {
		width: 0,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		width: "100%",
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
}

const NavbarLinks = () => {
	return (
		<>
			<ul className='hidden lg:flex gap-8'>
				{navLinks.map((links, index) => {
					const { href, name } = links
					return (
						<motion.li
							key={index}
							initial='rest'
							whileHover='hover'
							animate='rest'
							className='relative text-white text-xl w-max'
						>
							<Link className='font-sans-serif' href={href}>
								{name}
							</Link>

							<motion.span
								variants={HoverOverLinks}
								className='absolute left-0 h-1 bg-offwhite -bottom-2'
							></motion.span>
						</motion.li>
					)
				})}
			</ul>

			<ul className='fixed bottom-0 left-0 right-0 lg:hidden bg-black text-white inline-flex gap-8 justify-evenly px-6 w-screen'>
				{navLinks.map((links, index) => {
					const { href, Icon } = links
					return (
						<li key={index} className='flex flex-col gap-4 w-max'>
							<Link className='font-sans-serif text-sm p-6' href={href}>
								<Icon size={24} />
							</Link>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default NavbarLinks
