import Image from "next/image"
import preview from '../../public/img.jpg'
import profile from '../../public/profile.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

const ChannelCard = () => {
  return (
    <div className="channelcard__container bg-zinc-800 w-80 rounded-4xl my-4 font-quicksand overflow-hidden">
        <div className="grid grid-cols-13 items-center">
            <div className="w-12 mx-auto py-6">
                <Image src={profile} alt="image" className="rounded-full" />
            </div>
            <div>
                <div className="flex">
                    <h3 className="mr-3 mb-1 text-md font-bold">Dua Lipa</h3>
                </div>
                <p className="font-bold text-xs">2m <span className="text-zinc-500">Followers</span></p>
            </div>
            <div className="mx-auto">
                <button className="bg-blue-700 text-xs py-2 px-3 rounded-xl font-bold">Subscribe</button>
            </div>
        </div>
        <Swiper
            spaceBetween={-100}
            centeredSlides={true}
            slidesPerView={1}
            initialSlide={1}
        >
            <SwiperSlide>
                <div className="w-52 h-32 flex mx-auto">
                    <Image src={preview} alt="image" className="object-cover rounded-3xl" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-52 h-32 flex mx-auto">
                <Image src={preview} alt="image" className="object-cover rounded-3xl" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-52 h-32 flex mx-auto">
                <Image src={preview} alt="image" className="object-cover rounded-3xl" />
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ChannelCard