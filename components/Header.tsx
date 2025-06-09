import React from 'react'
import Logo from './Logo'
import Socials from './Socials'
import { CiMenuFries } from 'react-icons/ci'
import { MdFileDownload } from 'react-icons/md'
import { MdArrowCircleRight } from 'react-icons/md'
import NavLinks from './NavLinks'
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

const Header = () => {
	return (
		<div className='2xl:hidden z-40 left-0 top-0 right-0'>
			<div className=' mx-auto '>
				<div className='flex items-center justify-end py-6 '>
					{/* <Logo /> */}
					{/* nav mobile */}
					<Sheet>
						<SheetTrigger className='cursor-pointer text-[30px] text-gray-900 '>
							<CiMenuFries />
						</SheetTrigger>
						<SheetContent
							className='w-full bg-gray-800 text-slate-50 border-0 flex flex-col items-baseline px-16 py-12 '
							side='left'>
							<SheetHeader>
								<SheetTitle>
									<Logo />
								</SheetTitle>
								<SheetDescription className='sr-only'>
									Navigation Menu
								</SheetDescription>
							</SheetHeader>
							<NavLinks
								linkStyle={'text-slate-50 text-left'}
								containerStyles='flex flex-col gap-8 max-w-[200px]'
							/>
							<div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
								{/* <button className='btn btn-lg btn-gray mb-12 xl:mb-8'>
									<div className='flex items-center gap-3'>
										<span>Download</span>
										<MdArrowCircleRight className='text-xl' />
									</div>
								</button> */}
								<Socials
									containerStyles='flex gap-8'
									iconStyles='w-[48px] h-[48px] text-[26px] hover:text-slate-50 hover:bg-gray-900 transition-all duration-300 flex items-center justify-center rounded-full cursor-pointer bg-slate-50 text-gray-900'
								/>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	)
}

export default Header
