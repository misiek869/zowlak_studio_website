'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { MdOutlineArrowOutward, MdArrowRightAlt } from 'react-icons/md'
import { title } from 'process'

type Service = {
	icon: string
	href: string
	title: string
}

const services: Service[] = [
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Random Title',
	},
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Random Title',
	},
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Random Title',
	},
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Random Title',
	},
]

const ServicesPage = () => {
	return (
		<motion.section
			className='h-screen flex items-center'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}>
			<div className='container mx-auto w-full flex flex-col gap-16'>
				<div className=''>text</div>
				<div className=''>slider</div>
			</div>
		</motion.section>
	)
}

export default ServicesPage
