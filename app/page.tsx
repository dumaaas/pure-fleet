import HomeBigSection from "./components/HomeBigSection";
import ContactForm from "./components/ContactForm";
import CustomSlider from "./components/CustomSlider";

export default function Home() {
  return (
    <div>
      <div
        className="relative w-full lg:h-[635px] h-[545px] sm:pb-0 pb-[80px] flex items-center justify-end flex-col sm:justify-center"
        style={{
          backgroundImage: "url('/home-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center container mx-auto px-[16px]">
          <h1 className="text-secondary lg:text-[75px] lg:leading-normal leading-[53px] text-[53px] font-bold">
            Drive in style, protect for miles
          </h1>
          <p className="lg:text-[30px] text-[17px] lg:pt-0 pt-[30px] text-secondary">
            Protect your car with 0 miles, for a million miles - with our Pick
            up & Drop off service!
          </p>
          <div className="mt-9">
            <a href="#contact" className="btn">
              Book now
            </a>
          </div>
        </div>
      </div>
      <HomeBigSection />
      <CustomSlider />
      <ContactForm />
    </div>
  );
}
