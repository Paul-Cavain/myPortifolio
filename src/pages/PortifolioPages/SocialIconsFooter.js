import { BsDribbble, BsStopwatch } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialIconsFooter = () => {
  return (
    <ul className="flex flex-row justify-center items-center gap-x-5 md:gap-x-4">
      <a
        href="https://twitter.com/Cavain_tz"
        className="text-white hover:ring-1 bg-black hover:ring-black hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
      >
        <li>
          <FaTwitter />
        </li>
      </a>
      <a
        href="https://github.com/Paul-Cavain"
        className="text-white hover:ring-1 bg-black hover:ring-black hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
      >
        <li>
          <FaGithub />
        </li>
      </a>
      <a
        href="https://dribbble.com/cavaincodez"
        className="text-white hover:ring-1 bg-black hover:ring-black hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
      >
        <li>
          <BsDribbble />
        </li>
      </a>
      <a
        href="https://www.linkedin.com/in/paul-cavain-7511b5304/"
        className="text-white hover:ring-1 bg-black hover:ring-black hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
      >
        <li>
          <FaLinkedinIn />
        </li>
      </a>
      <a
        href="https://wakatime.com/@CavainCoder"
        className="text-white hover:ring-1 bg-black hover:ring-black hover:text-black hover:bg-white transition-all ease-out duration-500 rounded-full p-2"
      >
        <li>
          <BsStopwatch />
        </li>
      </a>
    </ul>
  );
};
export default SocialIconsFooter;
