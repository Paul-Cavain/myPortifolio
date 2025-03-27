import ArrowScroll from "./ArrowScroll";
import Carousels from "./Carousels";

const Testimonies = ({ testimonials }) => {
  return (
    <div className="pt-32 pb-20 md:pb-0 px-4 md:px-28">
      <h3 className="text-xl text-center">Testimonies</h3>
      <p className="pt-10 md:px-72 md:text-balance text-center">
        Hi, I am Paulo Nkelego, a software engineer passionate about building
        efficient and scalable software systems. Here, I share insights, tips,
        and experiences from my journey in tech. Thanks for stopping by —let us
        explore, learn, and grow together!
      </p>

      {/* carousel testimonials */}
      <Carousels testimonials={testimonials} />

      {/* Arrow srcoll */}
      <div className="flex md:hidden">
        <ArrowScroll />
      </div>
    </div>
  );
};

export default Testimonies;
