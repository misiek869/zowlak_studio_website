'use client'
import { motion } from 'framer-motion'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Info from '@/components/Info'
import Journey from '@/components/Journey'
import Skills from '@/components/Skills'
import Blob from '@/components/Blob'
import Socials from '@/components/Socials'

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
					<div className='w-full h-full max-w-[430px] relative pt-14 hidden xl:flex flex-col'>
						<Image
							src={'/assets/avatar.png'}
							width={320}
							height={496}
							alt='avatar image'
							className='z-20 relative'
						/>

						{/* ovelay */}
						{/* <div className='w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30'></div> */}

						{/* blob */}
						<div className='absolute top-[80px] -left-[80px] z-10'>
							<Blob containerStyles={'w-[420px] h-[420px]'} />
						</div>
						<Socials
							containerStyles='flex gap-4 z-40 transform translate-x-[30px]'
							iconStyles='w-[48px] h-[48px] text-slate-50 text-[22px] hover:text-slate-200 transition-all flex items-center justify-center rounded-full cursor-pointer'
						/>
					</div>
					<ScrollArea className='w-full h-[680px]'>
						<div className='flex flex-col items-center gap-3 mb-4'>
							{/* <div className='w-2 h-2 bg-gray-900 rounded-full text-slate-50'></div> */}
							<h2 className='h2 mb-6'>Biuro</h2>
							{/* <h2 className='h2 mb-6'>
								Zwolak<span>Studio</span>
							</h2> */}
							<p className='max-w-[540px] mb-12'>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio,
								dignissimos?
							</p>
							<div className='flex flex-col items-start gap-16'>
								<Stats />
								<Testimonials />
								<Info />
								{/* <Journey /> */}
								{/* <Skills /> */}
							</div>
						</div>
					</ScrollArea>
				</div>
			</div>
		</motion.section>
	)
}

export default AboutPage
