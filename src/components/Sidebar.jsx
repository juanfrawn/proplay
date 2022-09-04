import React from 'react'

import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='categories flex flex-row overflow-x-scroll items-center m-4 '>
      {categories.map(category => (
        <button
          className={`flex text-md px-5 py-1 rounded-2xl  ${category.name === selectedCategory && 'bg-selected'}`}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span className='mr-3 text-sm self-center'>{category.icon}</span>
          <span className='self-center w-max'>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Sidebar