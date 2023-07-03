import React from "react";
import Tlogo from "../../assets/Tlogo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar w-full h-[98px] bg-slate-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a>Testempnial</a>
              </li>
              <li>
                <a>Get App</a>
              </li>
            </ul>
          </div>
          <div className="w-[98px] h-[98px] pl-8 pt-2 ml-8 ">
            <img src={Tlogo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a>Testtemonial</a>
            </li>
            <li>
              <a>Get App</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="">
            <button>Log In</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
