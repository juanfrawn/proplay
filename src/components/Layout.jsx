import Nabvar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div>
          <Nabvar />
          <NavbarBottom />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
