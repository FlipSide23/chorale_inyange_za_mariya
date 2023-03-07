import { NavLink } from "react-router-dom";
import image from "../assets/images/About/aboutImage.jpg";
import { FaArrowRight, FaHeadset, FaMusic } from "react-icons/fa";

export const About = () => {
  return (
    <section id="about">
      <div className="flex py-20 flex-row tablet:flex-col space-x-4 justify-between mx-40">
        <div className="relative h-80 w-2/3">
          <div className="w-60 m-auto bg-black overflow-hidden rounded-2xl absolute top-0">
            <div className="relative">
              <img
                src={image}
                alt="Choir"
                className="w-full object-cover text-center h-64"
              />
              <div className="bg-white opacity-80 w-full h-full absolute top-0"></div>
            </div>
          </div>
          <div className="w-60 m-auto bg-black overflow-hidden rounded-2xl translate-x-10 translate-y-10 absolute top-0 hover:translate-x-0 hover:translate-y-0 cursor-pointer transition duration-300">
            <img
              src={image}
              alt="Choir"
              className="w-full object-cover text-center h-64"
            />
          </div>
        </div>
        <div className="mx-16 relative h-96">
          <FaMusic className="absolute bottom-0 text-green text-6xl" />
          <FaHeadset className="absolute bottom-12 right-0 text-green text-6xl" />
          <div className="flex justify-end pr-6">
            <FaMusic className="text-green text-6xl" />
          </div>
          <div className="p-6 w-4/5 mx-auto">
            <h3 className="font-bold text-xl mb-4">About Us</h3>
            <p className="text-slate-grey text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              architecto quod expedita libero. Earum voluptatum vel itaque
              libero, nam totam. Culpa modi rerum vel esse non sit eos velit
              odio.
            </p>
            <NavLink
              to="/#"
              className="inline-flex flex-row items-center bg-blue text-white space-x-3 px-3 py-2 rounded-md text-sm shadow-lg hover:shadow-none mt-8"
            >
              <span>Learn More</span>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
