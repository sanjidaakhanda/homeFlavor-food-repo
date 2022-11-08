import React from "react";

const About = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/uzbek-family-table-from-different-dishes_127425-338.jpg"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="w-1/2">
            <p className="text-2xl text-sky-500 font-semibold mb-4">About us</p>
            <h1 className="text-4xl font-bold text-rose-500 mb-5">
              I’m DUA. Welcome to my website.
            </h1>
            <p className=" font-semibold">
              Unfussy halal eatery specializing in fried chicken, plus
              subs,gyros,seafood, burgers & salads.{" "}
              <span className="text-rose-500">
                *Specializing in Halal Foods*
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-4xl text-center font-bold mb-5 mt-5 text-rose-500">
          Our Speciality
        </h1>
        <img
          src="https://img.freepik.com/premium-photo/delicious-grilled-burgers_62847-14.jpg?w=900"
          alt=""
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
