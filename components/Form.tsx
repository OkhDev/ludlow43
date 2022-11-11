import { useRef } from "react"

function Form() {
	const formRef = useRef(null)

	return (
		<form ref={formRef} className='flex flex-col gap-6 px-8'>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Full Name</label>
				<input
					autoFocus
					type='text'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Email</label>
				<input
					type='email'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Phone</label>
				<input
					type='tel'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Subject</label>
				<input
					type='text'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Message</label>
				<textarea
					className='p-4 rounded-md ring-0 outline-none'
					spellCheck={true}
					rows={7}
					wrap='soft'
				/>
			</div>
			<div className='flex gap-8 mx-auto'>
				<button
					type='button'
					className='px-5 py-3 bg-white rounded-md uppercase text-lg font-medium border-2 border-black'
				>
					Clear
				</button>
				<button
					type='submit'
					className='px-5 py-3 bg-black rounded-md uppercase text-lg font-medium text-white border-2 border-black'
				>
					Submit
				</button>
			</div>
		</form>
	)
}

export default Form
