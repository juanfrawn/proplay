import { useState } from 'react'

import Sidebar from './Sidebar'
import Videos from './Sidebar'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  return (
    <div className="flex flex-col md:flex-row w-full">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div>
            
        </div>
    </div>
  )
}

export default Feed