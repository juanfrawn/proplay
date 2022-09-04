import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import VideoChannel from '../../components/VideoChannel'

import Image from 'next/image';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

import profile from '../../../public/profile.jpg'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetail, setVideosDetail] = useState([]);
  const { query: { channelId } } = useRouter()

  // useEffect(() => {
  //   fetchFromAPI(`channels?part=snippet&id=${channelId}`)
  //     .then((data) => setChannelDetail(data?.items[0]))

  //   fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
  //     .then((data) => setVideosDetail(data?.items))
  // }, [channelId])

  return (
    <div className='text-center '>
      <div className='w-full h-52 bg-gradient-to-r from-cyan-500 to-blue-500'>
      </div>
      <div className='flex justify-center -translate-y-12 nb-0'>
        <Image 
          src={profile} 
          alt="Profile" 
          width={140}
          height={140}
          className='rounded-full'
        />
      </div>
      <h1 className='text-4xl font-bold -mt-6 mb-2'>Dua Lipa</h1>
      <p className='mb-10'><span className='font-bold'>2.000.000</span> Followers</p>

      <div className='flex flex-wrap justify-center gap-x-4 text-start'>
        <VideoChannel />
        <VideoChannel />
        <VideoChannel />
        <VideoChannel />
        <VideoChannel />
        <VideoChannel />
        <VideoChannel />
        <VideoChannel />
      </div>
    </div>
  )
}

export default ChannelDetail