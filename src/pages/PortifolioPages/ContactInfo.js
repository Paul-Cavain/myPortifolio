import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsStopwatch, BsTwitter } from "react-icons/bs";
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-black text-white px-8 md:px-20 py-10 w-full rounded-md md:rounded-l-md">
      <h2 className="text-xl md:text-2xl">Contact Information</h2>
      <p>Fill up the form to get a quicky feedback</p>

      <div className="mt-16 text-white">
        <div className="flex flex-row space-x-8">
          <div>
            <FaPhoneAlt className="text-2xl" />
          </div>
          <div>
            <h2>+255(0) 614 916 853</h2>
          </div>
        </div>
        <div className="flex flex-row space-x-10 mt-4">
          <div>
            <FaEnvelope className="text-2xl" />
          </div>
          <div>
            <h2>paulcavain02@gmail.com</h2>
          </div>
        </div>
        <div className="flex flex-row space-x-10 mt-4">
          <div>
            <FaLocationArrow className="text-2xl" />
          </div>
          <div>
            <h2>Dodoma-Tanzania</h2>
          </div>
        </div>
      </div>

      <div className="flex flex-row text-xl mt-10 md:mt-20 space-x-6">
        <Link
          to="https://github.com/Paul-Cavain"
          className="hover:ring-2 bg-red-500 hover:ring-white rounded-full p-3"
        >
          <BsGithub />
        </Link>
        <Link
          to=""
          className="hover:ring-2 bg-red-500 hover:ring-white rounded-full p-3"
        >
          <BsLinkedin />
        </Link>
        <Link
          to="https://twitter.com/Cavain_tz"
          className="hover:ring-2 bg-red-500 hover:ring-white rounded-full p-3"
        >
          <BsTwitter />
        </Link>
        <Link
          to="https://twitter.com/Cavain_tz"
          className="hover:ring-2 bg-red-500 hover:ring-white rounded-full p-3"
        >
          <BsStopwatch />
        </Link>
      </div>
    </div>
  );
};
export default ContactInfo;
