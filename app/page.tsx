'use client'
import Blob from '@/components/Blob'
import { motion } from 'framer-motion'
import Image from 'next/image'
import avatarImage from '@/public/assets/avatar.png'

const Home = () => {
	return (
		<motion.section
			className='flex h-screen items-center'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
			}}>
			<div className='flex flex-col xl:flex-row items-center justify-between w-full'>
				<div className='w-full xl:w-[550px]'
				
				</div>

				<div className='flex-1 hidden xl:block relative z-20'>
					<Blob containerStyles={'w-[560px] h-[560px]'} />
					{/* 
					<Image
						src={avatarImage}
						alt='avatar image'
						width={440}
						height={600}
						quality={100}
						className='absolute -top-1 left-[110px]'
					/> */}

					<div className='w-full h-[164px]'></div>
				</div>
			</div>
		</motion.section>
	)
}

export default Home
