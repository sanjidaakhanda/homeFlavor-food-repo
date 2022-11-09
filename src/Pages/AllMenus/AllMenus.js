import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllMenusCard from "./AllMenusCard";
const AllMenus = () => {
  const [allMenus, setAllMenus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => setAllMenus(data));
  }, []);

  return (
    <div>
      <p className="text-4xl text-rose-500 text-center mt-5 font-bold">
        Our Menus
      </p>
      <p className=" font-semibold text-center mb-5">
        Unfussy halal eatery specializing in fried chicken, plus subs,
        gyros,seafood, burgers <br /> & salads. pick your favorite item from
        here.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allMenus.map((allMenu) => (
          <AllMenusCard key={allMenu._id} allMenu={allMenu}></AllMenusCard>
        ))}
      </div>
    </div>
  );
};

export default AllMenus;