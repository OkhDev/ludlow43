import React from "react"
import { contact } from "../constants/index"
import { MdEmail } from "react-icons/md"
import { HiLocationMarker } from "react-icons/hi"

function ManagementOffice() {
	return (
		<div className='flex md:flex-row flex-col mt-12'>
			<div className='flex flex-col px-8 m-auto gap-4 leading-loose'>
				<h4 className='font-bold text-2xl text-center'>
					Management Office Information
				</h4>
				{contact.map((info, i) => {
					const { desc, Icon } = info
					return (
						<div
							key={i}
							className='inline-flex gap-4 items-center tracking-wide font-serif text-xl ml-6'
						>
							<Icon size={18} />
							<p>{desc}</p>
						</div>
					)
				})}
				<div className='inline-flex gap-4 items-center tracking-wide font-serif text-xl ml-6'>
					<MdEmail size={18} />
					<a href={"mailto:support@ludlow43.com"} className='underline'>
						support@ludlow43.com
					</a>
				</div>
				<div className='inline-flex gap-4 tracking-wide font-serif text-xl ml-6'>
					<HiLocationMarker size={18} style={{ marginTop: 6 }} />
					<ul>
						<li>Ludlow 43</li>
						<li>12 S. 43rd Street</li>
						<li>Philadelphia, PA 19104</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default ManagementOffice
