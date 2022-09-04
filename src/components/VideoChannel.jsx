import Image from "next/image";
import preview from "../../public/img.jpg";
import profile from "../../public/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoChannel = ({ video: { id, snippet } }) => {
  return (
    <div className="w-full sm:w-76 md:w-80 lg:w-120 mb-5 font-quicksand">
      <div className="w-full mb-1">
        <Image src={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              width={500}
              height={200} 
              className="rounded-3xl object-cover" 
              />
      </div>
      <div className="flex mx-1">
        <div className="max-w-full w-full">
          <h3 className="font-bold text-md mb-1">
            {snippet?.title.slice(0, 70) || "Titulo"}
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {snippet?.channelTitle || "Channel"}
          </p>
          <p className="text-gray-400 text-xs">
            {snippet?.publishedAt.slice(8, 10)}-
            {snippet?.publishedAt.slice(5, 7)}-
            {snippet?.publishedAt.slice(0, 4)}
            <span className="text-yellow-400 mx-2">•</span>
            {`${snippet?.publishedAt.slice(
              11,
              13
            )}:${snippet?.publishedAt.slice(14, 16)}`}
            {parseInt(snippet?.publishedAt.slice(11, 13)) > 12 ? " AM" : " PM"}
          </p>
        </div>
        <div className="text-lg my-2 mr-1 text-gray-400">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
};

export default VideoChannel;
