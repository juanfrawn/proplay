import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import VideoCard from '../../components/VideoCard'

import Image from 'next/image';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

import profile from '../../../public/profile.jpg'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetail, setVideosDetail] = useState([]);
  const { query: { channelId } } = useRouter()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
      .then((data) => setVideosDetail(data?.items))
  }, [channelId])
  console.log(videoDetail)

  return (
    <div className='text-center '>
      <div className='mx-auto h-60 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-4xl'>
      </div>
      <div className='flex justify-center -translate-y-14 nb-0'>
        <Image 
          src={channelDetail?.snippet?.thumbnails?.height?.url || channelDetail?.snippet?.thumbnails?.medium?.url} 
          alt="Profile" 
          width={150}
          height={150}
          className='rounded-full'
        />
      </div>
      <h1 className='text-4xl font-bold -mt-10 mb-2'>
        {channelDetail?.snippet?.title}
      </h1>
      <p className='mb-10'><span className='font-bold'>{channelDetail?.statistics?.subscriberCount}</span> Followers</p>
      <p className=' text-lg text-zinc-400 font-bold w-3/4 mx-auto mb-12'>{channelDetail?.snippet?.description.substring(0, 300)}</p>
      <div className='flex flex-wrap justify-center gap-x-4 text-start'>
        {videoDetail?.map((video, idx) => {
          return (
            <VideoCard
              video={video}
              key={idx}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChannelDetail