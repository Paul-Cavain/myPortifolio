import React from "react";
import { Link } from "react-router-dom";
import ArrowScroll from "./ArrowScroll";
import { BsEye, BsGithub } from "react-icons/bs";

const Works = ({ projects }) => {
  return (
    <div className="overflow-x-hidden pt-36 md:pt-32 pb-36 px-6 md:px-28 w-full">
      <h3 className="text-lg md:text-xl">My Projects</h3>
      {/* projects cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 justify-center items-center pt-2 md:pt-12 w-full rounded-sm">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border-2 border-black rounded-md shadow-md w-full min-h-56"
          >
            <img
              src={project.image}
              alt="project-image"
              className="h-[24vh] md:h-[30vh] w-full object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold flex flex-row justify-between items-center">
                {project.title}
                <Link to={project.projectLink} target="blank">
                  <BsEye className="size-8 bg-white text-black ring-1 ring-black hover:bg-black hover:text-white hover:ring-1 hover:ring-black rounded-md p-2 hover:p-2" />
                </Link>
              </p>
              <div className="flex flex-row justify-between items-center mt-10">
                <ul className="flex flex-row gap-x-2 md:gap-x-1 justify-start items-start">
                  <li className="bg-gray-400 w-fit px-1.5 md:px-2 py-1 rounded-sm">
                    {project.technologies[0]}
                  </li>
                  <li className="bg-gray-400 w-fit px-1.5 md:px-2 py-1 rounded-sm">
                    {project.technologies[1]}
                  </li>
                  <li className="bg-gray-400 w-fit px-1.5 md:px-2 py-1 rounded-sm">
                    {project.technologies[2]}
                  </li>
                  {project.technologies[3] && (
                    <li className="bg-gray-400 w-fit px-1.5 md:px-2 py-1 rounded-sm">
                      {project.technologies[3]}
                    </li>
                  )}
                </ul>
                <p>
                  <Link to={project.githubLink} target="blank">
                    <BsGithub className="size-8 bg-black text-white hover:bg-white hover:text-black hover:ring-1 hover:ring-black rounded-md p-2 hover:p-2" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll-to-Top Arrow */}
      <ArrowScroll />
    </div>
  );
};

export default Works;
