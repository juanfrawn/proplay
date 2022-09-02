import Image from "next/image"
import preview from '../../public/img.jpg'
import profile from '../../public/profile.jpg'
import { BsThreeDotsVertical } from 'react-icons/bs';

const VideoPreview = () => {
  return (
    <div className="w-full sm:flex mb-5 font-quicksand">
        <div className="object-cover w-full mb-1 sm:w-72">
            <Image src={preview} alt="image" className="rounded-3xl" />
        </div>
        <div className="flex">
            <div className="max-w-full w-full mx-1 sm:ml-4 sm:my-2 sm:mr-10">
                <h3 className="font-bold text-md mb-1 sm:text-lg sm:mb-0">Highlight - Raptor Fortnite</h3>
                <p className="text-gray-400 text-sm mb-2 sm:mb-4">Fortnite meat</p>
                <p className="text-gray-400 text-xs">12m views <span className="text-yellow-400 mx-2">•</span> 2 days ago</p>
            </div>
            <div className="text-gray-400 text-lg my-2 mr-1 sm:my-4">
                <BsThreeDotsVertical />
            </div>
        </div>
    </div>
  )
}

export default VideoPreview