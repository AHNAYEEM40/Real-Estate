import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providder/AuthProvider";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSingOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const Navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/property">Property</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-100 shadow-2xl">
      <div className="navbar-start lg:px-32 mx-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Navlink}
          </ul>
        </div>
        <a className="font-bold text-blue-600 text-2xl flex gradient-to-t to-orange-500 from-orange-800 ">
          <img className="h-10 w-10" src={logo} alt="" />
          Estate <span className="text-orange-600">Once</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Navlink}</ul>
      </div>
      <div className="navbar-end lg:px-32 mx-auto">
        {user ? <>
        <span className="mr-2 ">{user.email}</span>
          <button onClick={handleSingOut} className="btn">
            LogOut
          </button>
        </> : (
          <Link to="/login">
            <a className="btn bg-green-600">Login</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
