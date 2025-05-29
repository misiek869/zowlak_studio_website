'use client'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Stats from '@/components/Stats'

const AboutPage = () => {
	return (
		<motion.section
			className='h-screen flex items-center'
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 0, duration: 0.4, ease: 'easeIn' },
			}}>
			<div className='container max-auto px-0'>
				<div className='flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]'>
					<div className='w-full h-full max-w-[430px] relative pt-14 bg-red-300 hidden xl:flex'>
						1
					</div>
					<ScrollArea className='w-full h-[680px]'>
						<div className='flex flex-col items-center gap-3 mb-4'>
							<div className='w-2 h-2 bg-gray-900 rounded-full text-slate-50'>
								<p>About</p>
							</div>
							<h2 className='h2 mb-6'>
								Zwolak<span>Studio</span>
							</h2>
							<p className='max-w-[540px] mb-12'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
								dignissimos?
							</p>
							<div className='flex flex-col items-start gap-16'>
								<Stats />
								<div className=''>testimonials</div>
								<div className=''>info</div>
								<div className=''>journey</div>
								<div className=''>skills</div>
							</div>
						</div>
					</ScrollArea>
				</div>
			</div>
		</motion.section>
	)
}

export default AboutPage
