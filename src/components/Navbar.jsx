import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import logo from '../../public/logo.png'

import { BsFillBellFill, BsFillChatLeftDotsFill } from "react-icons/bs";

import profile from '../../public/profile.jpg'

const Navbar = () => {
  return (
    <div className='grid grid-cols-navbar py-4 mx-4 text-sm'>
      {/* <Link href="/">
        <a className='w-10 mr-4'>
          <Image src={logo} alt="logo" />
        </a>
      </Link> */}
      <SearchBar />
      <div className='flex items-center gap-6'>
        <button className='bg-component py-2 px-6 rounded-2xl hidden md:inline-flex'>Stream</button>
        <div className='flex items-center text-icons text-xl gap-6'>
          <BsFillBellFill className='hidden md:inline-flex'/>
          <BsFillChatLeftDotsFill className='hidden md:inline-flex'/>
          <Image src={profile} alt="profile" className='rounded-full' width={32} height={32} />
        </div>
      </div>
    </div>
  )
}

export default Navbar