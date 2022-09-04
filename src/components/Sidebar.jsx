import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from '../../public/profile.jpg'

import {GoHome} from 'react-icons/go'
import {GoGlobe} from 'react-icons/go'
import {GoStar} from 'react-icons/go'
import {GoThreeBars} from 'react-icons/go'
import {GoFlame} from 'react-icons/go'
import {GoHeart} from 'react-icons/go'

import { AiFillSetting } from 'react-icons/ai'

import { FaGooglePlay } from 'react-icons/fa'

import Logo from '../../public/logo.png'

function Sidebar() {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const [sidebarTextVisibility, setSidebarTextVisibility] = useState(true);

  return (
    <div className={`hidden md:block h-screen bg-gradient-to-b from-primary-light to-primary-lighter overflow-y-auto transition-all ${sidebarVisibility ? 'sidebar__open' : 'sidebar__close'}`}>
      <a
        onClick={() => {
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
        className='flex justify-center py-2 border-b border-border'>
          <Image src="/logo.png" alt="logo" width={60} height={60} />
        </a>
      <div className='font-bold'>
        <ul className='py-3 border-b border-border'>
          <Link href="/">
          <li className='flex items-center py-3 px-6 bg-selected'><GoHome className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Home</span></li>
          </Link>
          <li className='flex items-center py-3 px-6'><GoGlobe className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Discover</span></li>
          <li className='flex items-center py-3 px-6'><GoStar className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`} /><span className={sidebarTextVisibility ? '' : 'hidden'}>Favorites</span></li>
        </ul>
        <ul className='py-3 border-b border-border'>
          <li className='flex items-center py-3 px-6'><GoThreeBars className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Playlist</span></li>
          <li className='flex items-center py-3 px-6'><GoFlame className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Trends</span></li>
        </ul>
        <ul className='py-3 border-b border-border'>
          <li className='flex items-center py-3 px-6'><GoHeart className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`}/><span className={sidebarTextVisibility ? '' : 'hidden'}>Subscriptios</span></li>
          <ul className='pb-0'>
            <li className='flex items-center py-3 px-6'><Image src={profile} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Channel 1</span></li>
            <li className='flex items-center py-3 px-6'><Image src={profile} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Channel 2</span></li>
            <li className='flex items-center py-3 px-6'><Image src={profile} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Channel 3</span></li>
            <li className='flex items-center py-3 px-6'><Image src={profile} alt="Profile" width={25} height={25} className='rounded-full' /><span className={`${sidebarTextVisibility ? 'ml-3' : 'hidden'}`}>Channel 4</span></li>
          </ul>
        </ul>
        <ul className='py-3 border-b border-border'>
          <li className='flex items-center py-3 px-6'><FaGooglePlay className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`} /><span className={sidebarTextVisibility ? '' : 'hidden'}>Download App</span></li>
        </ul>
        <ul className='py-3 border-b border-border'>
          <li className='flex items-center py-3 px-6'><AiFillSetting className={`text-2xl text-icons ${sidebarVisibility ? 'mr-3' : ''}`} /><span className={sidebarTextVisibility ? '' : 'hidden'}>Settings</span></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Sidebar