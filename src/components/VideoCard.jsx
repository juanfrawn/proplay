import Image from "next/image";
import Link from "next/link";
import preview from "../../public/img.jpg";
import profile from "../../public/profile.jpg";

import { BsThreeDotsVertical } from "react-icons/bs";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="h-auto w-full sm:w-76 md:w-80 mb-5 font-quicksand cursor-pointer xl:hover:scale-105 xl:transition-transform xl:duration-500">
      <Link href={videoId ? `/video/${videoId}` : `/videos/dua`}>
        <div>
          <div className="w-full mb-1">
            <Image
              src={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              width="640"
              height="340"
              className="rounded-3xl object-cover md:w-80 "

            />
          </div>
          <div className="flex justify-between">
            <h3 className="font-bold text-sm mb-1">
              {snippet?.title.slice(0, 70) || "Titulo"}
            </h3>
            <div className="pt-2">
              <BsThreeDotsVertical className="text-lg ml-4 text-gray-400" />
              </div>
          </div>
        </div>
      </Link>

      <Link href={snippet.channelId ? `/channel/${snippet?.channelId}` : `/videos/dua`}>
        <p className="text-gray-400 text-sm mb-2">
          {snippet?.channelTitle || "Channel"}
        </p>
      </Link>
      <p className="text-gray-400 text-xs">
      {snippet?.publishedAt.slice(8, 10)}-
      {snippet?.publishedAt.slice(5, 7)}-
        {snippet?.publishedAt.slice(0, 4)}
        <span className="text-yellow-400 mx-2">•</span>
        {`${snippet?.publishedAt.slice(11, 13)}:${snippet?.publishedAt.slice(14, 16)}`}
        {parseInt(snippet?.publishedAt.slice(11, 13)) > 12 ? " PM" : " AM"}
      </p>
    </div>
  );
};

export default VideoCard;
