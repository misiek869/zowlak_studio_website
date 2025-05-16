'use client'
import { motion } from 'framer-motion'

const rectangleVariants = {
	initial: {
		y: '-100%',
		height: '100%',
	},
	animate: {
		y: '0%',
		height: '0%',
	},
	exit: {
		y: ['0%', '-100%'],
		height: ['0%', '100%'],
	},
}

const Rectangle = () => {
	return (
		<>
			<motion.div
				className='fixed top-full w-screen h-screen z-30 bg-gray-900'
				variants={rectangleVariants}
				initial={'initial'}
				animate='animate'
				exit='exit'
				transition={{
					delay: 0,
					duration: 0.6,
					ease: [0.63, 0, 0.17, 1],
				}}
			/>
			<motion.div
				className='fixed top-full w-screen h-screen z-20 bg-gray-800'
				variants={rectangleVariants}
				initial={'initial'}
				animate='animate'
				exit='exit'
				transition={{
					delay: 0.25,
					duration: 0.8,
					ease: [0.63, 0, 0.17, 1],
				}}
			/>
			<motion.div
				className='fixed top-full w-screen h-screen z-10 bg-gray-700'
				variants={rectangleVariants}
				initial={'initial'}
				animate='animate'
				exit='exit'
				transition={{
					delay: 0.35,
					duration: 1,
					ease: [0.63, 0, 0.17, 1],
				}}
			/>
			<motion.div
				className='fixed top-full w-screen h-screen z-10 bg-gray-600'
				variants={rectangleVariants}
				initial={'initial'}
				animate='animate'
				exit='exit'
				transition={{
					delay: 0.35,
					duration: 1,
					ease: [0.63, 0, 0.17, 1],
				}}
			/>
		</>
	)
}

export default Rectangle
