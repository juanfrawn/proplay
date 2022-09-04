import { AiFillHome, AiFillStar } from 'react-icons/ai'
import { BsFillBellFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { BiPlus } from 'react-icons/bi'


const NavbarBottom = () => {
  return (
    <div className="fixed z-10 bottom-0 bg-gradient-to-r from-primary-light to-primary-lighter w-full py-4 md:hidden">
        <div className='flex justify-around items-center text-xl text-icons'>
            <AiFillHome />
            <AiFillStar />
            <BiPlus className='text-4xl text-secondary border-2 border-secondary rounded-full' />  
            <BsFillBellFill />
            <BsFillChatLeftDotsFill />
        </div>
    </div>
  )
}

export default NavbarBottom