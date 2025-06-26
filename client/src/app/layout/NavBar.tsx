import { Link } from "react-router";
import { FiAlignLeft } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className="navbar gradient-bg shadow-sm container sticky top-0 z-50 backdrop-blur-xl">
      <div className="navbar-start ">
        <div className="dropdown md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle bg-none"
          >
            <FiAlignLeft size={20} />
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-active border-none normal-case text-xl gradient-text bg-none"
        >
          Reactivities
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-center text-lg">
          <li>
            <Link to={"/activities"}>Activities</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/login"
          className="btn btn-active border-none normal-case text-xl gradient-text bg-none"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
