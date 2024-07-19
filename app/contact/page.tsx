import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-1 lg:py-[91px] py-[70px]">
        <div className="container mx-auto">
          <div className="flex flex-col lg:gap-[50px] gap-[30px]">
            <p className="uppercase text-center lg:text-[30px] text-[22px] text-secondary">
              How to find us
            </p>
            <div className="w-full lg:h-[501px] h-[400px]">
              <iframe
                style={{ width: "100%", height: "100%" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46744.21800046058!2d19.0970866!3d42.77598320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134d14d6c4e3b4c7%3A0xf0c60b6827c13417!2sNik%C5%A1i%C4%87!5e0!3m2!1sen!2sme!4v1568633028392!5m2!1sen!2sme"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
