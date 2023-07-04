'use Client'

import Image from 'next/image'
import { intro, resume } from '@/constants'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className=''>
        <p className='text-center text-gray-200'>{intro}</p>
        <Link href={resume} type='Resume' key={'Resume'}>Get My Resume</Link>
    </div>
  )
}

export default Intro