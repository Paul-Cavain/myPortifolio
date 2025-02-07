import Skills from "../PortifolioPages/Skills";
import Services from "../PortifolioPages/Services";
import Profile from "./Profile";
import ArrowScroll from "./ArrowScroll";

const About = ({ projects }) => {
  return (
    <div>
      <div className="md:px-24 pb-32">
        {/* About Section */}
        <div className="pt-32">
          <h3 className="text-center text-xl md:text-xl">About Me</h3>
        </div>

        {/* about my profile */}
        <Profile projects={projects} />

        {/* Skills Section */}
        <Skills />

        {/* Services Section */}
        <Services />

        {/* Scroll-to-Top Arrow */}
        <ArrowScroll />
      </div>
    </div>
  );
};

export default About;
