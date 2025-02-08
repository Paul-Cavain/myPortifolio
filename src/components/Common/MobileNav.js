import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  const [menuOpen, stMenuOpen] = useState(false);
  const handleNav = () => {
    stMenuOpen(!menuOpen);
  };

  return (
    <>
      <div onClick={handleNav} className="sm:hidden cursor-pointer">
        <AiOutlineMenu size={25} />
      </div>

      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[70%] sm:hidden h-screen bg-[#ecf0f3] p-10 transition-all ease-out duration-500"
            : "fixed left-[-100%] top-0 p-10 transition-all ease-out duration-500 h-screen"
        }
      >
        <div className="flex flex-row space-x-6 w-full justify-between">
          <div>
            <h3 className="text-lg font-light">PauloNkelego</h3>
          </div>
          <div
            onClick={handleNav}
            className="cursor-pointer rounded-full text-black"
          >
            <AiOutlineClose size={30} />
          </div>
        </div>
        <hr className="mt-4" />

        {/* sidebar menu in a mobile */}
        <div className="flex col py-2">
          <ul>
            <a href="/">
              <li
                onClick={() => stMenuOpen(false)}
                className={`py-4 cursor-pointer ${
                  activeLink === "/"
                    ? "text-red-500 font-light"
                    : "hover:bg-white text-black hover:text-black font-light"
                }`}
              >
                Home
              </li>
            </a>
            <a href="/About">
              <li
                onClick={() => stMenuOpen(false)}
                className={`py-4 cursor-pointer ${
                  activeLink === "/About"
                    ? "text-red-500 font-light"
                    : "hover:bg-white text-black hover:text-black font-light"
                }`}
              >
                About Me
              </li>
            </a>
            <a href="/Works">
              <li
                onClick={() => stMenuOpen(false)}
                className={`py-4 cursor-pointer ${
                  activeLink === "/Works"
                    ? "text-red-500 font-light"
                    : "hover:bg-white text-black hover:text-black font-light"
                }`}
              >
                Works
              </li>
            </a>
            <a href="/Contacts">
              <li
                onClick={() => stMenuOpen(false)}
                className={`py-4 cursor-pointer ${
                  activeLink === "/Contacts"
                    ? "text-red-500 font-light"
                    : "hover:bg-white text-black hover:text-black font-light"
                }`}
              >
                Contacts
              </li>
            </a>
          </ul>
        </div>
        <hr className="mt-3" />

        <div className="fixed bottom-2 text-center">
          <p className="text-sm text-gray-700">
            All right reserved &copy; Nkelego
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
