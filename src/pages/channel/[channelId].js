import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import VideoCard from "../../components/VideoCard";

import Image from "next/image";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { subscriberCountShort } from "../../utils/subscriberCountShort";

import profile from "../../../public/profile.jpg";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetail, setVideosDetail] = useState([]);
  const {
    query: { channelId },
  } = useRouter();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`).then(
      (data) => setVideosDetail(data?.items)
    );
  }, [channelId]);
  console.log(channelDetail);

  return (
    <div className="text-center">
      <div 
      className="mx-auto overflow-hidden h-36 md:h-48 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg
        bg-no-repeat bg-cover bg-center
      ">
      </div>
      <div className="flex w-28 -translate-y-14 mx-auto">
        <Image
          src={
            channelDetail?.snippet?.thumbnails?.height?.url ||
            channelDetail?.snippet?.thumbnails?.medium?.url
          }
          alt="Profile"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div>
      <h1 className="text-2xl font-bold -mt-8 mb-4">
        {channelDetail?.snippet?.title}
      </h1>
      <p className="mb-10">
        <span className="font-bold">
          {subscriberCountShort(channelDetail?.statistics?.subscriberCount)}
        </span>{" "}
        Followers
      </p>
      <p className=" text-md text-zinc-400 font-bold w-full px-4 mb-12 break-all">
        {channelDetail?.snippet?.description.substring(0, 200)}
      </p>
      <div className="flex flex-wrap justify-center gap-x-4 text-start">
        {videoDetail?.map((video, idx) => {
          return <VideoCard video={video} key={idx} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default ChannelDetail;
