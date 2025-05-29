import CountUp from 'react-countup'

const Stats = () => {
	return (
		<div className=' flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12'>
			<div className='flex gap-4'>
				<div className='text-5xl font-bold text-gray-900 flex'>
					<CountUp end={12} duration={5} delay={2} className='block w-[60px]' />
					<div className=''>+</div>
				</div>

				<span className='font-semibold'>
					Lat <br />
					Doświadczenia
				</span>
			</div>

			<div className='flex gap-4'>
				<div className='text-5xl font-bold text-gray-900 flex'>
					<CountUp end={55} duration={5} delay={2} className='block w-[60px]' />
					<div className=''>+</div>
				</div>

				<span className='font-semibold'>
					Zrealizowanych <br />
					Projektów
				</span>
			</div>
		</div>
	)
}

export default Stats
