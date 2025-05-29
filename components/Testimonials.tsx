import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { ImQuotesLeft } from 'react-icons/im'

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
			className='w-full max-w-[310px] md:max-w-[520px] bg-red-200 rounded-lg'>
			{testimonials.map((item, index) => {
				return <SwiperSlide key={index}>{item.message}</SwiperSlide>
			})}
		</Swiper>
	)
}

export default Testimonials
