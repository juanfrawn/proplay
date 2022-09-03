import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

import Videos from "../../../src/components/Videos";

import { fetchFromAPI } from "../../../src/utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { query } = useRouter()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${query.search}`)
    .then((data) =>
      setVideos(data.items)
    );
  }, [query]);

  console.log(videos)

  return (
    <div>
      <Videos videos={videos} />
    </div>
  )
}

export default SearchFeed