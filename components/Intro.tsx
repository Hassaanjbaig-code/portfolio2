'use Client'

import Image from 'next/image'
import { intro, resume } from '@/constants'
import Link from 'next/link'

const Intro = () => {
    return (
        <div className='my-8'>
            <span className='flex justify-center'>
                <p className='text-center text-gray-200 w-1/2 leading-6'>{intro}</p>
            </span>
            <div className='w-full flex justify-center'>
                <Link href={resume} type='Resume' key={'Resume'} className='w-40 my-3 rounded-md h-12 flex justify-center items-center bg-blue-700 p-4 text-white cursor-pointer'>Get My Resume</Link>
            </div>
        </div>
    )
}

export default Intro