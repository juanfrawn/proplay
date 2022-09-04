import Nabvar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-layout">
        <Sidebar />
        <div className="">
        <main>
          <Nabvar />
          {children}
        </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
