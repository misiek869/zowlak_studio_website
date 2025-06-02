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
		icon: '/services/design.svg',
		href: '',
		title: 'Random Title',
	},
	{
		icon: '/services/design.svg',
		href: '',
		title: 'Random Title',
	},
	{
		icon: '/services/design.svg',
		href: '',
		title: 'Random Title',
	},
	{
		icon: '/services/design.svg',
		href: '',
		title: 'Random Title',
	},
]

const ServicesPage = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}>
			contact
		</motion.section>
	)
}

export default ServicesPage
