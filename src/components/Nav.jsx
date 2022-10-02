import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <>
      <header className="py-6 mb-12 border-b">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              className="shadow-2xl shadow-black/50 bg-black hover:bg-slate-700 text-white px-4 py-3 rounded-lg transition"
              to="/"
            >
              Home
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Nav;
