import emailjs from "@emailjs/browser"
import { useRef } from "react"
import toast, { Toaster } from "react-hot-toast"

function Form() {
	const formRef = useRef<HTMLFormElement>(null)

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault()

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
				formRef.current!,
				process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
			)
			.then(
				() => {
					formRef.current!.reset()
					toast.success("Message successfully sent!", { id: "send" })
				},
				(error) => {
					toast.error(`There was an error sending your message.\n${error}`, {
						id: "send",
					})
				}
			)
	}

	return (
		<form
			ref={formRef}
			onSubmit={sendEmail}
			className='flex flex-col gap-6 px-8'
		>
			<Toaster />
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Full Name</label>
				<input
					name='user_name'
					autoFocus
					required
					type='text'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Email</label>
				<input
					name='user_email'
					required
					type='email'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Phone</label>
				<input
					name='user_tel'
					type='tel'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Subject</label>
				<input
					name='user_subject'
					required
					type='text'
					className='h-12 pl-4 rounded-md ring-0 outline-none'
				/>
			</div>
			<div className='flex flex-col gap-2'>
				<label className='font-bold text-lg'>Message</label>
				<textarea
					name='user_message'
					required
					className='p-4 rounded-md ring-0 outline-none'
					spellCheck={true}
					rows={7}
					wrap='soft'
				/>
			</div>
			<div className='flex gap-8 mx-auto'>
				<button
					onClick={() => formRef.current!.reset()}
					type='button'
					className='px-5 py-3 bg-white rounded-md uppercase text-lg font-medium border-2 border-black'
				>
					Clear
				</button>
				<button
					value='Send'
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
