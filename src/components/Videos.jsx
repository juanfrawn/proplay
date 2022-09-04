import React from 'react'

import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({ videos }) => {
  const channel = [videos.filter(video => video.id.channelId)[0]]
  const video = videos.filter(video => video.id.videoId)

  return (
    <div>
      <div>
      {channel.map((item, idx) => (
        <div key={idx} className="w-80 sm:w-2/3 mx-auto px-2">
          {item?.id.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
      </div>
    <div className='flex flex-wrap justify-center gap-4 mx-2'>
      {video.map((item, idx) => (
        <div key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Videos