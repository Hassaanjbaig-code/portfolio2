import Image from 'next/image';
import { Home_text, Personal_Contact } from '@/components';
import { Personal_link } from '@/constants';

export default function Home() {
  return (
    <div className='h-[calc(100vh-4rem)] bg-gray-800'>
      <div className='Home'>
        <Home_text />
        <div>
          
        </div>
      </div>
      <footer>
        <ul className="flex w-full justify-center items-center mb-10">
          {Personal_link.map((ele) => (
            <Personal_Contact
              id={ele.id}
              name={ele.name}
              src={ele.src}
              image={ele.image}
            />
          ))}
        </ul>
      </footer>
    </div>
  )
}
