import React from 'react'

import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'

const Videos = ({ videos }) => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} />}
        </div>
      ))}
    </div>
  )
}

export default Videos