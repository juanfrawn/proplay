import Link from 'next/link'

import { BiPlus } from 'react-icons/bi'
import {GoHome} from 'react-icons/go'
import {GoGlobe} from 'react-icons/go'
import {GoStar} from 'react-icons/go'
import {GoThreeBars} from 'react-icons/go'


const NavbarBottom = () => {
  return (
    <div className="fixed z-10 bottom-0 bg-gradient-to-r from-primary-light to-primary-lighter w-full py-4 md:hidden">
        <div className='flex justify-around items-center text-xl text-icons'>
            <Link href="/">
              <GoHome />
            </Link>

            <Link href="/discover">
              <GoGlobe />
            </Link>

            <BiPlus className='text-4xl text-secondary border-2 border-secondary rounded-full' />  
            
            <Link href="/favorites">
              <GoStar />
            </Link>

            <Link href="/playlist">
            <GoThreeBars />
            </Link>
        </div>
    </div>
  )
}

export default NavbarBottom