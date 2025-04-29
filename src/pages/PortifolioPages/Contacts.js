import ArrowScroll from "./ArrowScroll";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contacts = () => {
  return (
    <div>
      <div className="w-full pt-32 px-4 md:px-28 pb-8 md:pb-20">
        <h2 className="text-start text-2xl md:text-xl">
          Feel Free To Make A Contact With Me.
        </h2>

        <div className="flex flex-col md:flex-row justify-around py-10">
          {/* contact informations */}
          <ContactInfo />

          {/* form to fill */}
          <ContactForm />
        </div>
        <div className="flex md:hidden">
          <ArrowScroll />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
