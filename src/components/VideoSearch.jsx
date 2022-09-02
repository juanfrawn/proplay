import Image from "next/image"
import preview from '../../public/img.jpg'
import profile from '../../public/profile.jpg'


const VideoSearch = () => {
  return (
    <div className="w-full md:flex mb-5 font-quicksand">
        <div className="object-cover w-full md:w-80">
            <Image src={preview} alt="image" className="rounded-3xl" />
        </div>
        <div className="mx-4 md:my-3">
            <h3 className="font-bold text-lg md:text-xl md:mb-1">Highlight - Raptor Fortnite</h3>    
            <p className="hidden md:inline-flex text-gray-400 text-md mb-2">12m views <span className="text-yellow-400 mx-2">•</span> 2 days ago</p>
            <div className="flex max-w-full w-full">
                <div className="w-8 my-1 md:w-8">
                    <Image src={profile} alt="image" className="rounded-full" />
                </div>
                <div className=" self-center mx-2">
                    <p className="text-gray-400 text-xs md:text-md mb-1">Fortnite meat</p>
                    <p className="text-gray-400 text-xs md:hidden">12m views <span className="text-yellow-400 mx-2">•</span> 2 days ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoSearch