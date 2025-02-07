import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const ArrowScroll = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const arrowRef = useRef(null);

  const handleClick = () => {
    handleScrollToTop();
    arrowRef.current.blur();
  };
  return (
    <div
      ref={arrowRef}
      className="fixed bottom-24 right-10 cursor-pointer text-xl text-white bg-black rounded-full p-2 shadow hover:ring-2 hover:ring-red-500 hover:bg-white hover:text-black transition-all ease-out duration-500"
      onClick={handleClick}
    >
      <FaArrowUp />
    </div>
  );
};

export default ArrowScroll;
