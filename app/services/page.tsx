'use client'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { MdOutlineArrowOutward, MdArrowRightAlt } from 'react-icons/md'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

type Service = {
	icon: string
	href: string
	title: string
}

const exteriorServices: Service[] = [
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Projekty Typowe',
	},
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Projekty Indywidualne',
	},
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Zmiana sposobu użytkowania',
	},
	{
		icon: '/assets/services/design.svg',
		href: '',
		title: 'Random Title',
	},
]

const interiorServices: Service[] = [
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
			className='h-screen flex items-center bg-red-200'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}>
			<div className='container mx-auto w-full flex flex-col gap-16'>
				<div className='flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8'>
					<h2 className='h2 max-w-[480px] text-left xl:mb-0'>
						Projekty <span className='font-bold'>Budowlane</span>
					</h2>
					<button className='btn btn-lg btn-gray flex gap-2'>
						Zobacz projekty budowlanee <MdArrowRightAlt className='text-2xl' />
					</button>
				</div>
				<Swiper
					className='h-[320px]'
					spaceBetween={30}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					modules={[Pagination]}
					pagination={{ clickable: true, dynamicBullets: true }}>
					{exteriorServices.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className='bg-gray-900/90 w-full h-[284px] rounded-xl px-[30px] py-[40px] flex flex-col justify-between'>
									<div className=' flex items-center justify-between mb-12'>
										<Image
											src={item.icon}
											width={48}
											height={48}
											alt='service'
										/>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													{' '}
													<div className='w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all text-slate-50'>
														<MdOutlineArrowOutward />
													</div>
												</TooltipTrigger>
												<TooltipContent>
													<p className='text-lg '>Dowied się więcej</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
									<h5 className='text-2xl text-slate-50 font-medium max-w-[240px] text-center my-auto'>
										{item.title}
									</h5>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>

				<div className='flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8'>
					<h2 className='h2 max-w-[480px] text-left xl:mb-0'>
						Projekty <span className='font-bold'>Wnętrz</span>
					</h2>
					<button className='btn btn-lg btn-gray flex gap-2'>
						Zobacz projekty wnętrz
						<MdArrowRightAlt className='text-2xl' />
					</button>
				</div>
				<Swiper
					className='h-[320px]'
					spaceBetween={30}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					modules={[Pagination]}
					pagination={{ clickable: true, dynamicBullets: true }}>
					{interiorServices.map((item, index) => {
						return (
							<SwiperSlide key={index}>
								<div className='bg-gray-900/90 w-full h-[284px] rounded-xl px-[30px] py-[40px] flex flex-col justify-between'>
									<div className=' flex items-center justify-between mb-12'>
										<Image
											src={item.icon}
											width={48}
											height={48}
											alt='service'
										/>
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													{' '}
													<div className='w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all text-slate-50'>
														<MdOutlineArrowOutward />
													</div>
												</TooltipTrigger>
												<TooltipContent>
													<p className='text-lg '>Dowied się więcej</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>
									<h5 className='text-2xl text-slate-50 font-medium max-w-[240px] text-center my-auto'>
										{item.title}
									</h5>
								</div>
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</motion.section>
	)
}

export default ServicesPage
