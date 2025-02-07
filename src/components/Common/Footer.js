import { BsDribbble, BsStopwatch } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="md:fixed bottom-0 right-0 left-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-28 bg-gray-200 py-6 pt-4">
        <div className="md:flex hidden">
          <h2>All right reserved &copy; PauloNkelego</h2>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center space-x-3 md:space-x-4">
            <a
              href="https://twitter.com/Cavain_tz"
              className="text-white hover:ring-2 bg-black hover:ring-red-500 hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
            >
              <li>
                <FaTwitter />
              </li>
            </a>
            <a
              href="https://github.com/Paul-Cavain"
              className="text-white hover:ring-2 bg-black hover:ring-red-500 hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
            >
              <li>
                <FaGithub />
              </li>
            </a>
            <a
              href="https://dribbble.com/cavaincodez"
              className="text-white hover:ring-2 bg-black hover:ring-red-500 hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
            >
              <li>
                <BsDribbble />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/paul-cavain-7511b5304/"
              className="text-white hover:ring-2 bg-black hover:ring-red-500 hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
            >
              <li>
                <FaLinkedinIn />
              </li>
            </a>
            <a
              href="https://wakatime.com/@CavainCoder"
              className="text-white hover:ring-2 bg-black hover:ring-red-500 hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
            >
              <li>
                <BsStopwatch />
              </li>
            </a>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
