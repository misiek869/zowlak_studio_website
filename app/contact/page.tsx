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
				<div className=''>
					<div className=''></div>
				</div>
			</div>
		</motion.section>
	)
}

export default ContactPage
