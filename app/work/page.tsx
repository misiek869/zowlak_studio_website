'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Image from 'next/image'
import { MdArrowOutward, MdOutlineArrowOutward } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { li } from 'framer-motion/client'

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
		title: 'Projekt 2',
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
		title: 'Projekt 3',
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
		title: 'Projekt 4',
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
					<div className='h-[400px] scrollbar scrollbar-thumb-white scrollbar-track-white/5 overflow-y-scroll xl:overflow-y-visible'>
						{categories.map((item, index) => {
							return (
								<TabsContent key={index} value={item}>
									<Swiper>
										{projects
											.filter(project => project.category === item)
											.map((item, index) => (
												<SwiperSlide className='h-full' key={index}>
													<div className='flex flex-col xl:flex-row gap-8 xl:gap-12'>
														<div className='w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none'>
															<h3 className='h3'>{item.title}</h3>
															<div className='xl:mb-4 max-w-[300px] min-h-[130px]'>
																<p className='mb-4 '>Technologies Used</p>
																<ul className='flex flex-wrap gap-4'>
																	{item.tech.map(tech => {
																		return (
																			<li
																				key={tech}
																				className='flex items-center gap-4 bg-gray-900/10 h-[28px] px-[14px] rounded-full'>
																				{tech}
																			</li>
																		)
																	})}
																</ul>
															</div>
															{/* buttons */}
															<div className=' flex flex-col sm:flex-row gap-4 items-start'>
																<Link href={item.link}>
																	<button className='btn btn-sm btn-gray flex gap-2'>
																		<MdArrowOutward className='text-xl' />
																		<span>Live Project</span>
																	</button>
																</Link>
																<Link href={item.github}>
																	<button className='btn btn-sm btn-gray flex gap-2'>
																		<FaGithub className='text-xl' />
																		<span>Github</span>
																	</button>
																</Link>
															</div>
														</div>
														<div className='w-full h-[200px] md:h-[400px] relative bg-pink-300 order-1 xl:order-none rounded-lg overflow-hidden'>
															<Image
																src={item.image}
																fill
																// width={}
																// height={}
																className='object-cover'
																alt='project image'
															/>
														</div>
													</div>
												</SwiperSlide>
											))}
									</Swiper>
								</TabsContent>
							)
						})}
					</div>
				</Tabs>
			</div>
		</motion.section>
	)
}

export default WorkPage
