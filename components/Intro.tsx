'use Client'

import Image from 'next/image'
import { intro, resume } from '@/constants'
import Link from 'next/link'

const Intro = () => {
    return (
        <div className=''>
            <p className='text-center text-gray-200'>{intro}</p>
            <div className='w-full flex justify-center my-7'>
                <Link href={resume} type='Resume' key={'Resume'} className='w-40 rounded-md h-12 flex justify-center items-center bg-blue-700 p-4 text-white cursor-pointer'>Get My Resume</Link>
            </div>
        </div>
    )
}

export default Intro