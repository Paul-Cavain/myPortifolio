import Navbar from "./components/Common/Navbar";
import Home from "./pages/PortifolioPages/Home";
import Footer from "./components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/PortifolioPages/About";
import Services from "./pages/PortifolioPages/Services";
import Works from "./pages/PortifolioPages/Works";
import Contacts from "./pages/PortifolioPages/Contacts";

function App() {
  const projects = [
    {
      id: 1,
      image: "./assets/images/screenshot.png",
      title: "Portifolio",
      description:
        "My portifolio, Show-casing my technological skills and projects in programming world",
      technologies: ["Reactjs", "Nodejs", "Tailwindcss"],
      projectLink: "https://vercel.com/paulcavains-projects",
      githubLink: "https://github.com/Paul-Cavain",
    },
    {
      id: 2,
      image: "./assets/images/logistics.jpg",
      title: "Logistic Transport",
      description: "This is Laravel project",
      technologies: ["Laravel", "Vite", "Tailwindcss"],
      projectLink: "https://vercel.com/paulcavains-projects",
      githubLink: "https://github.com/Paul-Cavain",
    },
    {
      id: 3,
      image: "./assets/images/screenshot.png",
      title: "CodeSoft Portifolio",
      description:
        "An exercise portifolio project under Codesoft Ltd, as part of frontend web development journey in Codesoft",
      technologies: ["HTML", "CSS", "Flexbox"],
      projectLink: "https://vercel.com/paulcavains-projects",
      githubLink: "https://github.com/Paul-Cavain",
    },
    {
      id: 4,
      image: "./assets/images/NTF.jpg",
      title: "NTF-Preview Card",
      description:
        "An exercise frontend project under Frontend Mentors part of frontend web development journey",
      technologies: ["HTML", "CSS", "Flexbox"],
      projectLink: "https://vercel.com/paulcavains-projects",
      githubLink: "https://github.com/Paul-Cavain",
    },
    {
      id: 5,
      image: "./assets/images/travelList.png",
      title: "Travel List",
      description:
        "A react project as a learning path from Ultimate course in udemy academy",
      technologies: ["Reactjs", "Tailwindcss", "Vercel"],
      projectLink: "https://vercel.com/paulcavains-projects",
      githubLink: "https://github.com/Paul-Cavain",
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About projects={projects} />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Works" element={<Works projects={projects} />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
