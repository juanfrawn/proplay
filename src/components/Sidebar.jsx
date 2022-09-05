import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {GoHome} from 'react-icons/go'
import {GoGlobe} from 'react-icons/go'
import {GoStar} from 'react-icons/go'
import {GoThreeBars} from 'react-icons/go'
import {GoFlame} from 'react-icons/go'
import {GoHeart} from 'react-icons/go'

import { AiFillSetting } from 'react-icons/ai'

import { FaGooglePlay } from 'react-icons/fa'

import Logo from '../../public/logo.png'
import channel_1 from '../../public/channel_1.jpg'
import channel_2 from '../../public/channel_2.jpg'
import channel_3 from '../../public/channel_3.jpg'
import channel_4 from '../../public/channel_4.jpg'

function Sidebar() {
  const [sidebarVisibility, setSidebarVisibility] = useState(false);
  const [sidebarClicked, setSidebarClicked] = useState(false);
  const [sidebarTextVisibility, setSidebarTextVisibility] = useState(false);

  return (
    <div className={`hidden md:block h-screen bg-gradient-to-b from-primary-light to-primary-lighter overflow-y-auto transition-all ${sidebarVisibility ? 'sidebar__open' : ''} ${!sidebarVisibility && sidebarClicked ? 'sidebar__close' : ''}`}>
      <a
        onClick={() => {
          setSidebarClicked(true);
          if(sidebarVisibility) {
            setSidebarTextVisibility(!sidebarTextVisibility);
            setSidebarVisibility(!sidebarVisibility);
          } else {
            setSidebarVisibility(!sidebarVisibility);
            setTimeout(() => {
              setSidebarTextVisibility(!sidebarTextVisibility);
            }, 200);
          }
        }}
        className='flex justify-center py-2 border-b border-border cursor-pointer'>
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </a>
      <div className='font-bold'>
        <ul className='py-3 border-b border-border'>
          <Link href="/">
          <li className='cursor-pointer flex items-center py-3 px-6 bg-selected'><GoHome className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Home</span></li>
          </Link>
          <Link href="/discover">
          <li className='cursor-pointer flex items-center py-3 px-6'><GoGlobe className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Discover</span></li>
          </Link>
          <Link href="/favorites">
          <li className='cursor-pointer flex items-center py-3 px-6'><GoStar className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`} /><span className={sidebarTextVisibility ? '' : 'hidden'}>Favorites</span></li>
          </Link>
        </ul>
        <ul className='py-3 border-b border-border'>
          <Link href="/playlist">
          <li className='cursor-pointer flex items-center py-3 px-6'><GoThreeBars className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Playlist</span></li>
          </Link>
          <Link href="/trends">
          <li className='cursor-pointer flex items-center py-3 px-6'><GoFlame className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Trends</span></li>
          </Link>
        </ul>
        <ul className='py-3 border-b border-border'>
          <li className='cursor-pointer flex items-center py-3 px-6'><GoHeart className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Subscriptios</span></li>
          <ul className='pb-0'>
            <Link href='/channel/UC-J-KZfRV8c13fOCkhXdLiQ'>
              <li className='cursor-pointer flex items-center py-3 px-6'><Image src={channel_1} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Dua Lipa</span></li>
            </Link>
            <Link href='/channel/UC5H_KXkPbEsGs0tFt8R35mA'>
              <li className='cursor-pointer flex items-center py-3 px-6'><Image src={channel_2} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Martin Garrix</span></li>
            </Link>
            <Link href='/channel/UCIwFjwMjI0y7PDBVEO9-bkQ'>
              <li className='cursor-pointer flex items-center py-3 px-6'><Image src={channel_3} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Justin Bieber</span></li>
            </Link>
            <Link href='/channel/UCmBA_wu8xGg1OfOkfW13Q0Q'>
              <li className='cursor-pointer flex items-center py-3 px-6'><Image src={channel_4} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Bad Bunny</span></li>
            </Link>
          </ul>
        </ul>
        <ul className='py-3 border-b border-border'>
          <Link href='/download'>
            <li className='cursor-pointer flex items-center py-3 px-6'><FaGooglePlay className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`} /><span className={sidebarTextVisibility ? '' : 'hidden'}>Download App</span></li>
          </Link>
        </ul>
        <ul className='py-3 border-b border-border'>
          <Link href='/settings'>
            <li className='cursor-pointer flex items-center py-3 px-6'><AiFillSetting className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`} /><span className={sidebarTextVisibility ? '' : 'hidden'}>Settings</span></li>
          </Link>
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar