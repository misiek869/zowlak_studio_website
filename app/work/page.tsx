'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'

const projects = [
	{
		id: 1,
		category: 'budowlane',
		title: 'Projekt 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, asperiores.',
		image: '/assets/work/work.jpg',
		link: '',
		github: '',
		tech: ['react', 'typescript'],
	},
	{
		id: 2,
		category: 'budowlane',
		title: 'Projekt 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, asperiores.',
		image: '/assets/work/work.jpg',
		link: '',
		github: '',
		tech: ['react', 'typescript'],
	},
	{
		id: 3,
		category: 'budowlane',
		title: 'Projekt 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, asperiores.',
		image: '/assets/work/work.jpg',
		link: '',
		github: '',
		tech: ['react', 'typescript'],
	},
	{
		id: 4,
		category: 'budowlane',
		title: 'Projekt 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, asperiores.',
		image: '/assets/work/work.jpg',
		link: '',
		github: '',
		tech: ['react', 'typescript'],
	},
]

const WorkPage = () => {
	return (
		<motion.section
			className='h-screen flex items-center'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}>
			work
		</motion.section>
	)
}

export default WorkPage
