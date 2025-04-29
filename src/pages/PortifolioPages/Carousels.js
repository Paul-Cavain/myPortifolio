const Carousels = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-center md:gap-x-5 gap-y-6 md:gap-y-0 w-full pt-16 pb-40">
      {testimonials.map((testmony) => (
        <div className="w-full border-2 border-black rounded-md shadow-md py-10 aspect-square">
          <div className="flex flex-row justify-between items-center px-10">
            <div className="flex flex-col gap-y-0.5">
              <h2 className="text-lg">{testmony.name}</h2>
              <p className="font-thin text-sm text-gray-800">{testmony.status}</p>
            </div>
            <img
              src={testmony.src}
              alt="testimonial"
              className="w-12 h-12 md:w-20 md:h-20 rounded-full ring-2 md:ring-4 ring-gray-300 object-cover hover:animate-pulse"
            />
          </div>
          <div>
            <p className="px-5 pt-14 text-justify">
              {testmony.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousels;
