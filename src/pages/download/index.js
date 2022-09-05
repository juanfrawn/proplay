import Link from 'next/link'
import { FaGooglePlay } from 'react-icons/fa'
import { SiAppstore } from 'react-icons/si'

const Download = () => {
  return (
    <div className='w-screen md:w-full h-screen text-center flex flex-col pt-20 items-center'>
        <h1 className='text-2xl font-bold mb-10'>Download the app</h1>
        <div className='flex justify-center gap-12 text-7xl'>
            <Link href="https://play.google.com/store/apps/details?id=com.google.android.youtube&hl=es_CL&gl=US">
            <a target="_blank" rel="noopener noreferrer">
                <FaGooglePlay className='cursor-pointer duration-150 transition hover:scale-125 hover:text-secondary' />
            </a>
            </Link>
            <Link href="https://apps.apple.com/bo/app/youtube/id544007664">
            <a target="_blank" rel="noopener noreferrer">
                <SiAppstore className='cursor-pointer duration-150 transition-transform hover:scale-110 hover:text-secondary' />
            </a>
            </Link>
        </div>
    </div>
  )
}

export default Download