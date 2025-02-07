import SocialIconsFooter from "../../pages/PortifolioPages/SocialIconsFooter";

const Footer = () => {
  return (
    <>
      <footer className="md:fixed bottom-0 right-0 left-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 md:px-28 bg-gray-200 py-6 pt-4">
        <div className="md:flex hidden">
          <h2>All right reserved &copy; PauloNkelego</h2>
        </div>
        <div>
          <SocialIconsFooter />
        </div>
      </footer>
    </>
  );
};

export default Footer;
