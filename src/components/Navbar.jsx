import Link from 'next/link'
import Image from 'next/image'
import SearchBar from './SearchBar'
import logo from '../../public/logo.png'

const Navbar = () => {
  return (
    <div>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>
      <SearchBar />
    </div>
  )
}

export default Navbar