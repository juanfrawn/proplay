import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";

import VideoPreview from "../../components/VideoPreview";
import { fetchFromAPI } from "../../utils/fetchFromAPI";

import { BsHandThumbsUp } from "react-icons/bs";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [video, setVideo] = useState([]);
  const { query } = useRouter();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${query.VideoId}`).then(
      (data) => setVideoDetail(data.items[0])
    );

    fetchFromAPI(
      `search?part=snippet&relatedToVideoId=${query.VideoId}&type=video`
    ).then((data) => setVideo(data.items));
  }, [query]);

  console.log(videoDetail)

  return (
    <div className="grid grid-cols-video">
      <div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${query.VideoId}`}
          className="react-player"
          controls
        />
        <div className="mx-4">
        <h1 className="text-3xl font-bold mt-6 mb-4">{videoDetail?.snippet?.title}</h1>
        <div className="flex justify-between mb-10">
          <span className="mr-3 text-lg">{videoDetail?.statistics.viewCount} visualizaciones</span>
          <span className="text-lg flex items-center">{videoDetail?.statistics.likeCount}<BsHandThumbsUp className="ml-2" /> </span>
        </div>
        <div className="mb-10 text-lg">
          <h2>{videoDetail?.snippet?.channelTitle}</h2>
        </div>
        <div>
          <p>{videoDetail?.snippet?.description}</p>
        </div>
        </div>
      </div>
      <div>
        {video?.map((video, idx) => {
          return <VideoPreview video={video} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
