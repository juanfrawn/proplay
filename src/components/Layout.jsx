import Nabvar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-layout">
        <Sidebar />
        <NavbarBottom />
        <div >
          <main className="h-screen overflow-y-auto">
            <Nabvar />
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;
