import { Home_text, Personal_Contact } from '@/components';

export default function Home() {
  return (
    <div className='h-[calc(100vh-4rem)] bg-gradient-to-r from-[#4C5666] via-[#736C88] to-[#A681A0]'>
      <div className='Home'>
        <Home_text />
        <div>
          
        </div>
      </div>
      <footer>
            <Personal_Contact/>
      </footer>
    </div>
  )
}
