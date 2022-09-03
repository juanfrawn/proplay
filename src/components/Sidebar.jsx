import React from 'react'

import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='flex flex-col h-screen bg-gradient-to-b from-primary-light to-primary-lighter'>
      {categories.map(category => (
        <button
          className={`flex text-md px-10 py-3 ${category.name === selectedCategory && 'bg-selected'}`}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span className='mr-4 self-center text-xl'>{category.icon}</span>
          <span className=''>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Sidebar