import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../assets/images/Members/image1.jpg";
import image2 from "../assets/images/Members/image2.jpg";
import image3 from "../assets/images/Members/image3.jpg";
import image4 from "../assets/images/Members/image5.jpg";

export const Members = () => {
  return (
    <section id="members">
      <div className="px-40 py-20 bg-neutral-200 flex flex-row space-x-5 tablet:flex-col">
        <div className="w-full flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-8">Members</h3>
          <p className="text-slate-grey text-sm pr-36">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            architecto quod expedita libero. Earum voluptatum vel itaque libero,
            nam totam. Culpa modi rerum vel esse non sit eos velit odio. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quod repudiandae
            consequatur alias quae sit! Impedit, deserunt quos neque saepe,
            maiores omnis fugit, in quae explicabo sit officiis laboriosam
            maxime obcaecati!
          </p>
          <div className="mt-16">
            <NavLink
              to="/#"
              className="inline-flex flex-row items-center bg-blue text-white space-x-3 px-5 py-3 rounded-md text-xs shadow-lg hover:shadow-none"
            >
              <span>View All Members</span>
              <FaArrowRight />
            </NavLink>
          </div>
        </div>
        <div className="w-full">
          <div className="flex mb-5 space-x-5">
            <div className="flex flex-col justify-end">
              {/* <div className="rounded-md hidden"> </div> */}
              <NavLink
                to="/#"
                className="rounded-xl overflow-hidden shadow-2xl hover:shadow-none"
              >
                <img src={image3} alt="sprano" className="" />
              </NavLink>
            </div>
            <div>
              <div className="rounded-xl overflow-hidden shadow-2xl mb-5 hover:shadow-none">
                <NavLink to="/#">
                  <img src={image2} alt="sprano" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex flex-col justify-start">
              <NavLink
                to="/#"
                className="rounded-xl overflow-hidden shadow-2xl hover:shadow-none mt-5"
              >
                <img src={image4} alt="sprano" className="" />
              </NavLink>
            </div>

            <NavLink
              to="/#"
              className="rounded-xl overflow-hidden shadow-2xl hover:shadow-none"
            >
              <img src={image1} alt="sprano" className="" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
