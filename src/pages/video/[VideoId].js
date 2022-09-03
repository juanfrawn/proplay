import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player';

import Videos from '../../components/Videos';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState(null);
    const [video, setVideo] = useState([]);
    const { query } = useRouter() 
    
    useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${query.VideoId}`)
      .then(data => setVideoDetail(data.items[0]))
      
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${query.VideoId}&type=video`)
      .then(data => setVideo(data.items))
    }, [query])

    return (
        <div>
            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${query.VideoId}`} 
              className="react-player" controls 
            />
        </div>
    )
}

export default VideoDetail