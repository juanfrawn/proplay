import Nabvar from './Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Nabvar />
            <main>{ children }</main>
        </>
    )
}

export default Layout;