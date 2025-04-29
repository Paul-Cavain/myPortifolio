import Navbar from "./components/Common/Navbar";
import Home from "./pages/PortifolioPages/Home";
import Footer from "./components/Common/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/PortifolioPages/About";
import Works from "./pages/PortifolioPages/Works";
import Contacts from "./pages/PortifolioPages/Contacts";
import Testimonies from "./pages/PortifolioPages/Testimonies";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import { useLocation } from "react-router-dom";

function App() {

  // Inside your component:
const location = useLocation();
const isAdminDashboard = location.pathname === "/AdminDashboard";

  const projects = [
    {
      id: 1,
      image: "./assets/images/screenshot.png",
      title: "Portifolio",
      description:
        "My portifolio, Show-casing my technological skills and projects in programming world",
      technologies: ["Reactjs", "Nodejs", "Tailwindcss"],
      projectLink: "https://nkelegome.vercel.app/",
      githubLink: "https://github.com/Paul-Cavain/myPortifolio",
    },
    {
      id: 2,
      image: "./assets/images/interactive_card_details.png",
      title: "Interactive Card Details",
      description: "A react project as a learning path from frontend Menotr",
      technologies: ["Reactjs", "Tailwindcss", "Vercel"],
      projectLink: "https://travel-list-eta-ten.vercel.app/",
      githubLink: "https://github.com/Paul-Cavain/travel-list",
    },
    {
      id: 3,
      image: "./assets/images/eat_n_split.png",
      title: "Eat'n Split",
      description:
        "A final challenge project after completing fundamental phase in ultimate course of udemy",
      technologies: ["React", "TailwindCss", "NodeJs"],
      projectLink: "#",
      githubLink: "https://github.com/Paul-Cavain/code-crafters",
    },
    {
      id: 4,
      image: "./assets/images/age.png",
      title: "Age Calculator",
      description:
        "An exercise portifolio project under Codesoft Ltd, as part of frontend web development journey in Codesoft",
      technologies: ["HTML", "CSS", "Flexbox", "Javascript"],
      projectLink: "#",
      githubLink: "https://github.com/Paul-Cavain/Portfolio",
    },
    {
      id: 5,
      image: "./assets/images/NTF.jpg",
      title: "NFT-Preview Card",
      description:
        "An exercise frontend project under Frontend Mentors part of frontend web development journey",
      technologies: ["HTML", "CSS", "Flexbox"],
      projectLink: "https://nft-preview-card-5uc2.vercel.app/",
      githubLink: "https://github.com/Paul-Cavain/NFT-preview-card",
    },
    {
      id: 6,
      image: "./assets/images/travelList.png",
      title: "Travel List",
      description:
        "A react project as a learning path from Ultimate course in udemy academy",
      technologies: ["Reactjs", "Tailwindcss", "Vercel"],
      projectLink: "https://travel-list-eta-ten.vercel.app/",
      githubLink: "https://github.com/Paul-Cavain/travel-list",
    },
    {
      id: 7,
      image: "./assets/images/qrcode.jpg",
      title: "Simple Qr Code",
      description: "This is Laravel project",
      technologies: ["HTML", "CSS", "Flexbox"],
      projectLink: "#",
      githubLink: "https://github.com/Paul-Cavain/code-crafters",
    },
  ];

  const testimonials = [
    {
      name: "FRANKLIN SAINT",
      status: "Amazon Programmer",
      src: "/assets/images/passport2.png",
      alt: "Image 1",
      description:
        '"We are proud to say that most of our new business comes from referrals.  Our clients are our partners, and forming long-lasting relationships is always our goal.  See what some of our clients are saying about working with Team NPG."',
    },
    {
      name: "JEROME ALISON",
      status: "Capital Space Manager",
      src: "/assets/images/passport4.png",
      alt: "Image 2",
      description:
        '"NPG has been a great asset to our team, with bigger concepts like helping us build our brand and then also with everyday tasks such as creating social graphics and building our online presence. Would definitely recommend their team to companies who are looking to grow their business!"',
    },
    {
      name: "MARRISON BUCKLEY",
      status: "Apple Executive Manager",
      src: "/assets/images/passport3.png",
      alt: "Image 3",
      description:
        '"I have built over a dozen websites with nearly a dozen different developers and web shops. The experience building my latest website with NPG was possibly the best I have ever had. From the proposal to the launch, they were honest, competent and thorough!"',
    },
  ];

  return (
    <div className="App">
      {!isAdminDashboard && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About projects={projects} />} />
        <Route
          path="/Testimonies"
          element={<Testimonies testimonials={testimonials} />}
        />
        ~
        <Route path="/Works" element={<Works projects={projects} />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
      </Routes>
      {!isAdminDashboard && <Footer />}
    </div>
  );
}

export default App;
