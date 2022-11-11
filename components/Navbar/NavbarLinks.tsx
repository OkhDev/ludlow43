import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { CgMenuRightAlt } from "react-icons/cg"
import { navLinks } from "../../constants/index"

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

const MobileMenu = {
	rest: {
		y: -480,
		z: -10,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
	click: {
		y: 0,
		z: -10,
		transition: {
			duration: 0.2,
			type: "tween",
			ease: "easeIn",
		},
	},
}

const NavbarLinks = () => {
	const [isMobileMenu, setIsMobileMenu] = useState<boolean>(false)
	const router = useRouter()

	const logoClick = () => {
		setIsMobileMenu(false)
		router.push("/")
	}

	const menuClick = () => {
		setIsMobileMenu(!isMobileMenu)
	}

	return (
		<>
			<h1
				className='text-5xl font-logo text-white cursor-pointer'
				onClick={logoClick}
			>
				ludlow 43
			</h1>
			<ul className='z-10 hidden lg:flex gap-8 items-center'>
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
			<span
				className='text-white p-6 pr-0 lg:hidden inline-flex cursor-pointer'
				onClick={menuClick}
			>
				<CgMenuRightAlt size={36} />
			</span>

			<motion.ul
				variants={MobileMenu}
				initial='rest'
				animate={isMobileMenu ? "click" : "rest"}
				className='-z-10 flex flex-col fixed top-24 left-0 right-0 lg:hidden bg-black text-white gap-12 justify-center py-12 items-center w-screen'
			>
				{navLinks.map((links, index) => {
					const { name, href } = links
					return (
						<li key={index} className='w-max'>
							<Link
								className='font-serif text-3xl p-6'
								href={href}
								onClick={() => setIsMobileMenu(false)}
							>
								{name}
							</Link>
						</li>
					)
				})}
			</motion.ul>
		</>
	)
}

export default NavbarLinks
