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
    <div className="w-full sm:w-76 md:w-80 lg:w-120 mb-5 font-quicksand">
      <Link href={videoId ? `/video/${videoId}` : `/videos/dua`}>
        <div>
          <div className="object-cover w-full mb-1">
            <Image
              src={snippet?.thumbnails?.high?.url}
              alt={snippet?.title}
              width={320}
              height={180}
              className="rounded-3xl object-cover"
            />
          </div>
          <div className="flex">
            <h3 className="font-bold text-md mb-1">
              {snippet?.title.slice(0, 60) || "Titulo"}
            </h3>
              <BsThreeDotsVertical className="text-lg my-2 mr-1 text-gray-400" />
          </div>
        </div>
      </Link>

      <Link href={snippet.channelId ? `/channel/${snippet?.channelId}` : `/videos/dua`}>
        <p className="text-gray-400 text-sm mb-2">
          {snippet?.channelTitle || "Channel"}
        </p>
      </Link>
      <p className="text-gray-400 text-xs">
        12m views <span className="text-yellow-400 mx-2">•</span> 2 days ago
      </p>
    </div>
  );
};

export default VideoCard;
