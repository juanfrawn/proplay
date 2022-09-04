import { useState, useEffect } from 'react'

import Categories from './Categories'
import Videos from './Videos'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  // useEffect(() => {
  //   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  //     .then((data) => setVideos(data.items))
  // }, [selectedCategory])

  return (
    <div className="flex flex-col w-full">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className='w-full'>
          <Videos videos={videos} />
        </div>
    </div>
  )
}

export default Feed