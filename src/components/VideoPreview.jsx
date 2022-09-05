import Image from "next/image";
import Link from "next/link";
import preview from "../../public/img.jpg";
import profile from "../../public/profile.jpg";
import { BsThreeDotsVertical } from "react-icons/bs";

const VideoPreview = ({ video: { id, snippet } }) => {
  console.log(id)
  return (
    <Link href={id ? `/video/${id.videoId}` : `/video/dua`}>
    <div className="w-full sm:w-2/5 xl:w-full xl:flex mb-5 font-quicksand cursor-pointer">
      <div className="object-cover w-full mb-1 xl:w-72 xl:min-w-">
        <Image
          src={snippet?.thumbnails?.high?.url}
          alt="image"
          className="rounded-3xl xl:rounded-xl object-cover"
          width="640"
          height="360"
        />
      </div>

      <div className="flex">
        <div className="max-w-full w-full mx-1 sm:ml-4 sm:my-2 sm:mr-10 ">
          <h3 className="font-bold text-md mb-1 sm:text-lg sm:mb-0 xl:text-sm">
            {snippet?.title.slice(0, 40) || "Titulo"}
          </h3>
          <p className="text-gray-400 text-sm mb-2 sm:mb-4 xl:text-xs xl:mb-2">
            {snippet?.channelTitle || "Channel"}
          </p>
          <p className="text-gray-400 text-xs xl:hidden">
            {snippet?.publishedAt.slice(8, 10)}-
            {snippet?.publishedAt.slice(5, 7)}-
            {snippet?.publishedAt.slice(0, 4)}
            <span className="text-yellow-400 mx-2">•</span>
            {`${snippet?.publishedAt.slice(
              11,
              13
            )}:${snippet?.publishedAt.slice(14, 16)}`}
            {parseInt(snippet?.publishedAt.slice(11, 13)) > 12 ? " PM" : " AM"}
          </p>
        </div>
        <div className="text-gray-400 text-lg my-2 mr-1 sm:my-4">
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
    </Link>
  );
};

export default VideoPreview;
