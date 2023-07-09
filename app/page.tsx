import { Home_text, Personal_Contact } from '@/components';

export default function Home() {
  return (
    <div className='h-[calc(100vh-4rem)] bg-[#121212]'>
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
