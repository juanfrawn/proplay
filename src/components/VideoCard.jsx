import Image from "next/image"
import preview from '../../public/img.jpg'
import profile from '../../public/profile.jpg'

import { BsThreeDotsVertical } from 'react-icons/bs';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  return (
    <div className="w-full sm:w-76 md:w-80 lg:w-120 mb-5 font-quicksand">
        <div className="object-cover w-full mb-1">
            <Image src={snippet?.thumbnails?.high?.url} alt={snippet?.title} width={320} height={180} className="rounded-3xl object-cover" />
        </div>
        <div className="flex">
            <div className="max-w-full w-full">
                <h3 className="font-bold text-md mb-1">
                    {snippet?.title.slice(0, 60) || 'Titulo'}
                </h3>
                <p className="text-gray-400 text-sm mb-2">
                    {snippet?.channelTitle || 'Channel'}
                </p>
                <p className="text-gray-400 text-xs">12m views <span className="text-yellow-400 mx-2">•</span> 2 days ago</p>
            </div>
            <div className="text-lg my-2 mr-1 text-gray-400">
                <BsThreeDotsVertical />
            </div>
        </div>
    </div>
  )
}

export default VideoCard