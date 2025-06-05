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

type Project = {
	id: number
	category: string
	title: string
	description: string
	image: string
	link: string
	github: string
	tech: string[]
}

const projects: Project[] = [
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
		category: 'wnętrza',
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
		category: 'wnętrza',
		title: 'Projekt 1',
		description:
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, asperiores.',
		image: '/assets/work/work.jpg',
		link: '',
		github: '',
		tech: ['react', 'typescript'],
	},
]

const categories: string[] = ['budowlane', 'wnętrza']

const WorkPage = () => {
	return (
		<motion.section
			className='min-h-screen flex items-center py-24 xl:py-0'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}>
			<div className='container mx-auto w-full h-full flex-col justify-center'>
				<h2 className='h2 mb-6 xl:mb-12 max-w-[600px]'>
					Moje <span className='font-bold'>Projekty</span>
				</h2>
				<Tabs
					defaultValue='budowlane'
					className='w-full flex flex-col gap-6 xl:gap-12'>
					{/* tabs list */}
					<TabsList className='flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0'>
						{categories.map((item, index) => {
							return (
								<TabsTrigger
									className='capitalize border border-gray-900/10 data-[state=active]:bg-gray-900 data-[state=active]:text-slate-50 data-[state=active]:border-white/10 h-[48px] px-6 rounded-full hover:bg-gray-900/10 transition-all duration-100 cursor-pointer'
									key={index}
									value={item}>
									{item}
								</TabsTrigger>
							)
						})}
					</TabsList>
					{/* tabs content */}
				</Tabs>
			</div>
		</motion.section>
	)
}

export default WorkPage
