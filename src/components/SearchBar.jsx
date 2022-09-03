import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { useRouter } from 'next/router'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter()

  return (
    <div className="my-auto">
      <form 
        className="relative w-4/5 md:w-2/3"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchTerm) {
            router.push(`/search/${searchTerm}`)
      
            setSearchTerm('');
          }

        }}
      >
        <input
          type="text"
          className="search-bar rounded-3xl p-3 sm:pl-12 py-3 
            bg-component outline-none w-full
            "
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <BiSearch className="hidden sm:block absolute text-xl top-3 left-4 text-neutral-200" />
        <FaMicrophone className="hidden sm:block absolute text-xl top-3 right-5 text-icons" />
      </form>
    </div>
  );
};

export default SearchBar;
