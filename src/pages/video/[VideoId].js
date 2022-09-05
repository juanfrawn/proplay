import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactPlayer from "react-player";

import VideoPreview from "../../components/VideoPreview";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

import { BsHandThumbsUp } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [releatedVideos, setReleatedVideos] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${query.VideoId}`).then(
      (data) => setVideoDetail(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${query.VideoId}&type=video`
    ).then((data) => setReleatedVideos(data.items?.slice(0, 19)));
  }, [query]);

  const video = releatedVideos?.filter((videos) => videos?.snippet?.title);

  return (
    <div className="grid grid-rows-video xl:grid-cols-video">
      <div className="">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${query.VideoId}`}
            width="100%"
            height="100%"
          />
        </div>

        <div className="p-2">
          <h1 className="text-xl font-bold mt-6 mb-4">
            {videoDetail?.snippet?.title}
          </h1>
          <div className="flex justify-between mb-10">
            <span className="mr-3 text-base">
              {videoDetail?.statistics.viewCount} visualizaciones
            </span>
            <span className="text-base flex items-center">
              {videoDetail?.statistics.likeCount}
              <BsHandThumbsUp className="ml-2" />{" "}
            </span>
          </div>
          <Link href={`/channel/${videoDetail?.snippet?.channelId}`}>
            <div className="mb-10 text-md cursor-pointer">
              <h2 className="flex items-center gap-2">
                <span className="text-xl">
                  <AiOutlineUser />
                </span>
                {videoDetail?.snippet?.channelTitle}
              </h2>
            </div>
          </Link>
          <div>
            <p className="text-sm break-all">
              {showMore
                ? videoDetail?.snippet?.description
                : videoDetail?.snippet?.description.substring(0, 200)}
            </p>
            <button
              onClick={() => setShowMore(!showMore)}
              className="mb-10 w-full p-2 rounded-2xl flex justify-center items-center gap-2"
            >
              {showMore ? "Show Less" : "Show more"}
              {showMore ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>
      </div>

      <div className="sm:flex sm:flex-wrap sm:justify-around xl:block xl:px-4">
        {video?.map((video, idx) => {
          return <VideoPreview video={video} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
