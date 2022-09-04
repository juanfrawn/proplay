import Nabvar from './Navbar';
import NavbarBottom from './NavbarBottom';

const Layout = ({ children }) => {
    return (
        <>
            <Nabvar />
            <NavbarBottom />
            <main>{ children }</main>
        </>
    )
}

export default Layout;