'use client'
import Blob from '@/components/Blob'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Image from 'next/image'
import avatarImage from '@/public/assets/avatar.png'
import { MdArrowCircleRight } from 'react-icons/md'
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'
import Socials from '@/components/Socials'

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
				<div className='w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left'>
					<h1 className='h1 flex-1'>
						<TypeAnimation
							sequence={[
								'Z',
								400,
								'Zw',
								200,
								'Zwo',
								200,
								'Zwol',
								200,
								'Zwola',
								200,
								'Zwolak',
								200,
								'Zwolak S',
								200,
								'Zwolak St',
								200,
								'Zwolak Stu',
								200,
								'Zwolak Stud',
								200,
								'Zwolak Studio',
								4000,
							]}
							wrapper={'h1'}
							speed={60}
							className=''
							// repeat={Infinity}
							cursor={false}
						/>
					</h1>
					<h3 className='h3 mt-10 mb-10'>Architektura i Wnętrza</h3>
					<button className='btn btn-lg btn-gray mb-12 xl:mb-8'>
						<div className='flex items-center gap-3'>
							<span>Go</span>
							<MdArrowCircleRight className='text-xl' />
						</div>
					</button>
					{/* contact */}
					<div className='flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0'>
						<div className='flex items-center gap-4 text-lg'>
							<span>
								<HiOutlinePhone className='text-xl' />
							</span>
							<span>505 145 522</span>
						</div>
						<div className='flex items-center gap-4 text-lg'>
							<span>
								<HiOutlineMail className='text-xl' />
							</span>
							<span>zwolak.studio@gmail.com</span>
						</div>
					</div>
					{/* socials */}
					<Socials />
					<div className=''></div>
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
