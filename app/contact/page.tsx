'use client'
import { motion } from 'framer-motion'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

import { HiOutlineMapPin, HiOutlineArrowLongRight } from 'react-icons/hi2'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

const ContactPage = () => {
	return (
		<motion.section
			className='h-screen flex items-center py-24 xl:py-0'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
			}}>
			<div className='container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar-thumb-white scrollbar-track-white/5 overflow-y-scroll xl:overflow-y-visible'>
				<div className='w-full'>
					<div className='flex  flex-col xl:flex-row gap-6'>
						<div className=''>info text</div>
						<div className='flex-1'>
							<form action='' className='flex flex-col gap-6 items-start'>
								{/* first and last name */}
								<div className='flex flex-col xl:flex-row gap-6 w-full'>
									<div className='w-full'>
										<Label htmlFor='name'>Imię</Label>
										<Input
											id='firstname'
											name='firstname'
											placeholder='Imię'
											required
										/>
									</div>
									<div className='w-full'>
										<Label htmlFor='name'>Nazwisko</Label>
										<Input
											id='lastname'
											name='lastname'
											placeholder='Nazwisko'
											required
										/>
									</div>
								</div>
								{/* email */}
								<div className='w-full'>
									<Label htmlFor='email'>Twój Email</Label>
									<Input
										id='email'
										name='email'
										placeholder='email@example.com'
										required
									/>
								</div>
								{/* select */}
								<div className='w-full'>
									<Label htmlFor='service'>Jestem Zainteresowany</Label>
									<Select name='service' required>
										<SelectTrigger id='service' className='w-full !h-12'>
											<SelectValue placeholder='Czego dotyczy zapytanie' />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value='exterior'>
												Projekt Budowlany
											</SelectItem>
											<SelectItem value='interior'>Projekt Wnętrz</SelectItem>
										</SelectContent>
									</Select>
								</div>
								{/* text */}
								<div className='w-full'>
									<Label htmlFor='message'>Wiadomość</Label>
									<Textarea
										className='min-h-[160px] '
										id='message'
										placeholder='Twoja Wiadomość...'></Textarea>
								</div>
								{/* btn */}
								<button className='btn btn-lg btn-gray'>
									<div className='flex items-center gap-3'>
										<span className='font-medium'>Wyślij Wiadomość</span>
										<HiOutlineArrowLongRight className='text-xl' />
									</div>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	)
}

export default ContactPage
