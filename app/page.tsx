'use client'
import { motion } from 'framer-motion'

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
				<div className='w-full xl:w-[550px]'>text</div>
				<div className='flex-1 hidden xl:block relative z-20'>{/* blob */}</div>
			</div>
		</motion.section>
	)
}

export default Home
