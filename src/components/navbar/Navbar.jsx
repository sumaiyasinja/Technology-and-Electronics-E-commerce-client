import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/bytopedia-logo-sky.png";
// import logo2 from '../../assets/img/bytopedia-logo-purple.png'
import { useAuth } from "./../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";


const Navbar = () => {
  const { user, loginWithGoogle, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
  };
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Succefully logged in with google.");
        navigate(location.state ? location.state : "/");
      })
      .catch((e) => toast.error(e.message));
    console.log("Signing in with Google");
  };

  const [openMobileNav, setOpenMobileNav] = useState(false);
  const NavLinks = (
    <>
      <NavLink className="hover:bg-blue-400 hover:text-white px-2 py-1 rounded" to="/">
        Home
      </NavLink>

      <NavLink
        className="hover:bg-blue-400 hover:text-white px-2 py-1 rounded"
        to="/add-product"
      >
        Add Product
      </NavLink>
      <NavLink className="hover:bg-blue-400 hover:text-white px-2 py-1 rounded" to="/my-cart">
        My Cart
      </NavLink>
    </>
  );

  return (
    <div className=" z-50">
      <Toaster></Toaster>
      {/* <!-- Main navigation container --> */}
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            onClick={() => setOpenMobileNav(!openMobileNav)}
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          >
            {/* <!-- Hamburger icon --> */}
            <span className="[&gt;svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* mobile nav */}
          <div className="flex lg:hidden ">
            {openMobileNav && (
              <ul className="mt-5 absolute left-2 font-semibold flex flex-col">
                {NavLinks}
              </ul>
            )}
          </div>

          {/* <!-- Collapsible navigation container --> */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            data-te-collapse-item
          >
            {/* <!-- website Logo --> */}
            <Link
              to="/"
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
            >
              <img
                src={logo}
                style={{ height: "40px" }}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
            {/* <!--  navigation links --> */}
          </div>
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row "
              data-te-navbar-nav-ref
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                {NavLinks}
              </li>
            </ul>
          </div>
          {/* <!-- Right elements --> */}
          <div className="relative flex items-center">
            
            {user ? (
             <>
              <button
                onClick={handleLogOut}
                className="hover:bg-gray-400  rounded "
                to="/"
              >
                Sign Out <span className="text-gray-800 px-1">|</span>
              </button> 
              <p className="mr-5">{user?.displayName}</p>
             </>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="hover:bg-gray-400  rounded "
              >
                Sign In
              </button>
            )}
            
            {/* <!--  container avatar  --> */}
            <div
              className="relative"
              data-te-dropdown-ref
              data-te-dropdown-alignment="end"
            >
              <div
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
              >
                {/* <!-- User avatar --> */}
                  <div className=" ">
                    {user && user.photoURL ? (
                      <img
                        className="rounded-full ring ring-green-500 "
                        style={{ height: "25px", width: "25px" }}
                        alt=""
                        loading="lazy"
                        src={user.photoURL}
                      />
                    ) : (
                      <img
                        className="rounded-full"
                        style={{ height: "25px", width: "25px" }}
                        alt=""
                        loading="lazy"
                        src="https://i.ibb.co/s65Z563/CITYPNG-COM-Profile-User-Round-White-Icon-Symbol-PNG-1000x1000.png"
                      />
                    )}
                  </div>
              </div>
            </div>
            {/* <!-- Cart Icon --> */}
            <Link
              to="/"
              className="ml-4 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
            >
              <span className="[&gt;svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
