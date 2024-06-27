import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row bg-slate-100 p-6 rounded-lg max-w-7xl mx-auto my-10">
        <div
          className="flex-1 relative
        "
        >
          <img
            src={person} // Replace with your image source
            alt="Mechanic"
            className="rounded-lg mb-4 md:mb-0 w-11/12"
          />
          <img
            src={parts} // Replace with your image source
            alt="Mechanic"
            className="rounded-lg  w-3/5  absolute top-1/2 right-2 border-white border-8"
          />
        </div>

        {/* about us section */}
        <div className=" flex-1 p-10 bg-white rounded-lg shadow-lg relative space-y-5">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg"></div>
          <h3 className="text-red-600 font-bold text-4xl mt-10">About Us</h3>
          <h2 className="text-5xl font-bold my-4 ">
            We are qualified <br /> &amp; of experience <br /> in this field
          </h2>
          <p className="text-gray-600 mb-4">
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised Words Which Don&apos;t Look Even Slightly
            Believable.
          </p>
          <p className="text-gray-600 mb-6">
            The Majority Have Suffered Alteration In Some Form, By Injected
            Humour, Or Randomised Words Which Don&apos;t Look Even Slightly
            Believable.
          </p>
          <button className="btn btn-primary rounded-md bg-red-600 hover:bg-red-700 text-white">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
