import Image from "next/image"
import Link from "next/link"
import preview from '../../public/img.jpg'
import profile from '../../public/profile.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

const ChannelCard = ({ channelDetail }) => {
  return (
    <div className="bg-component rounded-3xl my-4 font-quicksand overflow-hidden">
        <Link href={`/channel/${channelDetail?.id?.channelId}`}>
        <div className="grid grid-cols-13 items-center">
            <div className="w-14 mx-auto py-4">
                <Image src={channelDetail?.snippet?.thumbnails?.high?.url || profile} alt="image" className="rounded-full" width={180} height={180} />
            </div>
            <div>
                <div className="flex">
                    <h3 className="mr-3 mb-1 text-md font-bold">
                        {channelDetail?.snippet?.title}
                    </h3>
                </div>
                <p className="font-bold text-xs">2m <span className="text-zinc-500">Followers</span></p>
            </div>
            <div className="mx-auto">
                <button className="bg-blue-700 text-xs py-2 px-3 rounded-xl font-bold">Subscribe</button>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default ChannelCard