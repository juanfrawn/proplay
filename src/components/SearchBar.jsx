import { BiSearch } from 'react-icons/bi'
import { FaMicrophone } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className="my-auto">
      <div className='relative w-4/5 md:w-2/3'>
        <input 
            type="text"
            className="search-bar rounded-3xl p-3 sm:pl-12 py-3 
            bg-component outline-none w-full
            "
            placeholder="Search..."
        />
        <BiSearch className='hidden sm:block absolute text-xl top-3 left-4 text-neutral-200' />
        <FaMicrophone className='hidden sm:block absolute text-xl top-3 right-5 text-icons' />
      </div>
    </div>
  )
}

export default SearchBar