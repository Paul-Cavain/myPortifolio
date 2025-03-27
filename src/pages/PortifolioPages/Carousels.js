const Carousels = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center md:gap-x-5 gap-y-6 md:gap-y-0 w-full pt-16">
      {testimonials.map((testmony) => (
        <div className="w-full border-2 border-black rounded-md shadow-md py-4">
          <div className="flex flex-row justify-between items-center px-10">
            <h2>{testmony.name}</h2>
            <img
              src={testmony.src}
              alt="testimonial"
              className="w-12 h-12 md:w-20 md:h-20 rounded-full ring-2 md:ring-4 ring-gray-300 object-cover"
            />
          </div>
          <div>
            <p className="px-5 pt-6 text-justify">
              a software engineer passionate about building efficient and
              scalable software systems. Here, I share insights, tips, and
              experiences from my journey in tech.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousels;
