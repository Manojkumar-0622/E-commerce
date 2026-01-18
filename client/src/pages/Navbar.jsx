import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { VscClose } from "react-icons/vsc";

const Navbar = ({ SetSearch, search }) => {
  const navicateLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Pages", path: "/products" },
    {
      name: "Blog",
      path: "/Blog",
      child: [
        { name: "Blog Page", path: "/blog/blogpage" },
        { name: "Single Blog", path: "/blog/singleblog" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full h-23 flex justify-between items-center">
      {/* Logo */}
      <div className="pl-12 text-3xl opacity-70 flex-1">
        <div className="cursor-pointer inline-block">Blow</div>
      </div>

      {/* Navigation */}
      <div className="flex flex-1">
        <ul className="flex gap-10">
          {navicateLinks.map((links) => (
            <li
              key={links.name}
              className={`relative py-5 px-1 text-[17px] cursor-pointer ${
                links.child ? "group" : ""
              }`}
            >
              {/* Parent Link */}
              {links.child ? (
                <span className="relative z-10 block">
                  {links.name}
                </span>
              ) : (
                <NavLink
                  to={links.path}
                  className={({ isActive }) =>
                    `relative z-10 block ${
                      isActive
                        ? "text-orange-600"
                        : "text-black hover:text-orange-600"
                    }`
                  }
                >
                  {links.name}
                </NavLink>
              )}

              {/* Dropdown */}
              {links.child && (
                <ul
                  className="
                    min-w-36
                    absolute
                    top-full
                    left-0
                    z-20
                    bg-white
                    rounded
                    opacity-0
                    translate-y-4
                    pointer-events-none
                    transition-all
                    duration-300
                    ease-in-out
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:pointer-events-auto
                  "
                >
                  {links.child.map((child) => (
                    <li key={child.name} className="p-1 whitespace-nowrap">
                      <NavLink
                        to={child.path}
                        className={({ isActive }) =>
                          `block text-center text-[15px] rounded py-2 transition duration-300 ${
                            isActive
                              ? "text-orange-600 bg-orange-600/30"
                              : "text-gray-700 hover:text-orange-600 hover:bg-orange-600/30"
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex-1 flex justify-around items-center ml-10 mr-3">
          <FaSearch
            className="size-6 cursor-pointer"
            onClick={() => SetSearch(true)}
          />

          {/* Search Box */}
          <div
            className={`${
              search ? "opacity-100 top-1/2" : "opacity-0 top-0"
            } transition-all duration-300 ease-in-out absolute rounded -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-137.5 z-40 bg-white`}
          >
            <div className="flex justify-between items-center px-4 py-4">
              <div className="text-[17px] font-semibold">TYPE TO SEARCH</div>
              <VscClose
                onClick={() => SetSearch(false)}
                className="size-6 cursor-pointer"
              />
            </div>

            <div className="flex items-center bg-gray-200">
              <input
                type="text"
                className="px-4 text-[18px] text-gray-700 outline-0 w-[500px] py-3"
              />
              <GoSearch className="p-2 w-11.25 h-10 mx-2 my-2" />
            </div>
          </div>

          {/* User */}
          <div className="relative group">
            <FaUser className="size-6 cursor-pointer" />
            <NavLink
              to="/login"
              className="absolute opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 z-20 bg-white min-w-[120px] p-2 flex justify-center items-center top-10 right-[-52px] rounded whitespace-nowrap hover:text-orange-600 text-[15px] transition-all duration-300"
            >
              Login / register
            </NavLink>
          </div>

          <FaShoppingCart className="size-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
