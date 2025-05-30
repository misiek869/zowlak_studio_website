import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { FaRegCommentDots } from 'react-icons/fa'

type Testimonial = {
	message: string
	name: string
}

const testimonials: Testimonial[] = [
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, adipisci.',
		name: 'John Doe',
	},
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, adipisci.',
		name: 'John Doe',
	},
	{
		message:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, adipisci.',
		name: 'John Doe',
	},
]

const Testimonials = () => {
	return (
		<Swiper
			modules={[Autoplay]}
			loop={true}
			autoplay={{ delay: 4000, disableOnInteraction: false }}
			className='w-full max-w-[300px] md:max-w-[520px] bg-red-200 rounded-lg'>
			{testimonials.map((item, index) => {
				return (
					<SwiperSlide key={index}>
						<div className='flex px-8 py-6 gap-8'>
							<FaRegCommentDots className='hidden xl:flex text-8xl text-gray-900' />
							<div className='flex flex-col gap-2'>
								<p>{item.message}</p>
								<p className='self-end font-semibold'>{item.name}</p>
							</div>
						</div>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default Testimonials
