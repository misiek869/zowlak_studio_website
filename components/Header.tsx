import React from 'react'
import Logo from './Logo'
import Socials from './Socials'
import { CiMenuFries } from 'react-icons/ci'
import { MdFileDownload } from 'react-icons/md'
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
						<SheetTrigger className='cursor-pointer text-[30px] text-slate-50'>
							<CiMenuFries />
						</SheetTrigger>
						<SheetContent
							className='bg-primary border-0 flex flex-col items-center justify-between pt-16 pb-20'
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
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	)
}

export default Header
