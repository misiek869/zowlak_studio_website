'use client'
import { motion } from 'framer-motion'

const AboutPage = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 1, duration: 0.4, ease: 'easeIn' },
			}}>
			About
		</motion.section>
	)
}

export default AboutPage
