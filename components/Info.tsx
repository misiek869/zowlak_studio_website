import {
	HiOutlineMail,
	HiOutlinePhone,
	HiOutlineLocationMarker,
} from 'react-icons/hi'
import { HiOutlineCalendarDays } from 'react-icons/hi2'

const Info = () => {
	return (
		<div className='flex flex-col gap-6 md:gap-10'>
			<div className='flex flex-col md:flex-row gap-4'>
				<div className='w-[280px] flex items-start gap-4'>
					<HiOutlineCalendarDays className='text-2xl mt-1 text-gray-900' />
					<div className=''>
						<p className='text-lg'>Data założenia</p>
						<p>2025</p>
					</div>
				</div>
				<div className='w-[280px] flex items-start gap-4'>
					<HiOutlineMail className='text-2xl mt-1 text-gray-900' />
					<div className=''>
						<p className='text-lg'>Email</p>
						<p>zwolakstudio@gmail.com</p>
					</div>
				</div>
			</div>

			<div className='flex flex-col md:flex-row gap-4'>
				<div className='w-[280px] flex items-start gap-4'>
					<HiOutlinePhone className='text-2xl mt-1 text-gray-900' />
					<div className=''>
						<p className='text-lg'>Telefon</p>
						<p>+48 512 145 522</p>
					</div>
				</div>
				<div className='w-[280px] flex items-start gap-4'>
					<HiOutlineLocationMarker className='text-2xl mt-1 text-gray-900' />
					<div className=''>
						<p className='text-lg'>Lokalizacja</p>
						<p>Oświęcim</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Info
