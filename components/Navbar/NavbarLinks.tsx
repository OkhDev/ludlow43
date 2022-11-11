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
		<div className='hidden lg:flex gap-8'>
			{navLinks.map((navLinks, index) => {
				const { href, name } = navLinks
				return (
					<motion.ul
						key={index}
						initial='rest'
						whileHover='hover'
						animate='rest'
						className='relative text-white text-xl w-max font-sans-serif'
					>
						<li>
							<Link href={href}>{name}</Link>
						</li>
						<motion.span
							variants={HoverOverLinks}
							className='absolute left-0 h-1 bg-offwhite -bottom-2'
						></motion.span>
					</motion.ul>
				)
			})}
		</div>
	)
}

export default NavbarLinks
