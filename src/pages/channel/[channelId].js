import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

import { fetchFromAPI } from '../../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videoDetail, setVideosDetail] = useState([]);
  const { query: { channelId } } = useRouter()

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${channelId}&part=snippet&order=date`)
      .then((data) => setVideosDetail(data?.items))
  }, [channelId])
  console.log(channelDetail)

  return (
    <div>
      <h1>{channelDetail?.snippet.title}</h1>
    </div>
  )
}

export default ChannelDetail