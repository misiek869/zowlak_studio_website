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
		<div className='2xl:hidden absolute z-40 left-0 top-0 right-0'>
			<div className='container mx-auto '>
				<div className='flex items-center justify-between py-6'>
					<Logo />
					{/* nav mobile */}
					<Sheet>
						<SheetTrigger className='cursor-pointer text-[30px] text-gray-900'>
							<CiMenuFries />
						</SheetTrigger>
						<SheetContent
							className='bg-primary border-0 flex flex-col items-center justify-center pt-16 pb-20'
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
								linkStyle={'text-gray-800 text-center'}
								containerStyles='flex flex-col gap-8 max-w-[100px]'
							/>
							<div className=''>
								{' '}
								<button className='btn btn-lg btn-gray mb-12 xl:mb-8'>
									<div className='flex items-center gap-3'>
										<span>Download</span>
										<MdArrowCircleRight className='text-xl' />
									</div>
								</button>
								<Socials
									containerStyles='flex gap-4 justify-center'
									iconStyles='bg-gray-900 text-slate-50 rounded-full hover:bg-gray-800 transition w-[40px] h-[40px] text-[20px] flex items-center justify-center cursor-pointer'
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
