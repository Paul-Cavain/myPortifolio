import { BellPlus, Settings } from "lucide-react";
import React from "react";

const Header = ({ collapsed }) => {

  return (
    <section>
      <nav className={`${collapsed ? 'fixed top-0 left-32 z-10 right-0 flex flex-row justify-between px-4 md:px-10 bg-white py-6 shadow-md md:shadow-sm transition-all duration-300"' : "fixed top-0 left-52 z-10 right-0 flex flex-row justify-between px-4 md:px-10 bg-white py-6 shadow-md md:shadow-sm transition-all duration-300"}`}>
        <div className="text-xl md:text-xl">
          <span>Overview</span>
        </div>

        <div className="flex flex-row gap-x-10 justify-center items-center">
          <div>
            <label htmlFor="search" className="hidden">Search engine</label>
            <input type="text" name="serch" placeholder="Search for something" className="bg-gray-100 px-4 py-1 rounded-lg outline-none" />
          </div>
          <div >
            <ul className="flex flex-row justify-center items-center gap-x-5">
              <li><Settings className="size-8 p-1.5 ring-1 ring-gray-200 rounded-full bg-gray-100 cursor-pointer" /></li>
              <li><BellPlus className="size-8 p-1.5 ring-1 ring-gray-200 rounded-full bg-gray-100 cursor-pointer" /></li>
              <li>
                <img src="/admin.jpg" alt="Logo" className="size-12 object-cover ring-1 ring-black rounded-full mx-4 cursor-pointer" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
