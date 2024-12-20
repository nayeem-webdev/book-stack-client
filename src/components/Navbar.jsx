import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/",
    key: "home",
  },
  {
    name: "Add Book",
    path: "/add-book",
    key: "add-book",
  },
  {
    name: "My Books",
    path: "/my-books",
    key: "my-books",
  },
  {
    name: "Profile",
    path: "/profile",
    key: "profile",
  },
];

const Navbar = () => {
  // Mobile Menu Open/ Close
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav
      className={`fixed bg-primary w-full top-0 z-50 px-5 py-4 flex items-center justify-between transition-all duration-300`}
    >
      <div className="flex gap-2">
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenu(true)}>
            <FaBars size={24} />
          </button>
        </div>
        {/* Mobile Links */}
        {mobileMenu && (
          <div className="absolute top-0 left-0 w-full h-screen bg-primary bg-opacity-90 flex flex-col items-center justify-center gap-6 md:hidden">
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.key}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-accent ${
                        isActive ? "text-accent border-b-2 border-accent" : ""
                      }`
                    }
                    onClick={() => setMobileMenu(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Logo Section */}
        <Link to={"/"} className=" text-2xl font-bold">
          <div className="flex items-center justify-center gap-1">
            <h2 className="text-2xl font-bold">BookStack</h2>
          </div>
        </Link>
      </div>

      {/* Middle Section */}
      <div className="hidden md:flex items-center gap-6 font-medium">
        <ul className="flex gap-6 ">
          {links.map((link) => (
            <li key={link.key}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-accent ${
                    isActive ? "text-accent border-b-2 border-accent" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      {/* {user ? (
      <div className="flex items-center gap-4">
        <Link to={"/profile"}>
          {loading ? (
            <img
              title={`${user.displayName} Visit Your Profile`}
              src={user.photoURL}
              className="h-10 w-10 rounded-full border-2 border-accent"
              alt=""
            />
          ) : (
            <img
              title={`${user.displayName} Visit Your Profile`}
              src={user.photoURL}
              className="h-10 w-10 rounded-full border-2 border-accent"
              alt=""
            />
          )}
        </Link>
        <button
          onClick={handleLogout}
          className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/80 transition"
        >
          Logout
        </button>
      </div>
    ) : ( */}
      <div className="flex items-center gap-4">
        <FaUserCircle
          className="text-accent text-3xl "
          title={`Nayeem Uddin | Visit Profile`}
        />
        <Link
          to="/login"
          className="bg-accent border border-gray-800 px-4 py-2 rounded-sm hover:bg-accent/80 transition group"
        >
          Profile Login
        </Link>
      </div>
      {/* )} */}
    </nav>
  );
};

export default Navbar;
