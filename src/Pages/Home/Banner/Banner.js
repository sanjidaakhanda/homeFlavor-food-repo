import React from "react";

const Banner = () => {
  return (
    <div className="mb-10">
      <div className="text-4xl font-semibold text-center mb-10">
        <h1>
          All Your Favourite Food <br />
          <span className="text-rose-500">Made here</span>
        </h1>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=900&t=st=1667876369~exp=1667876969~hmac=1a472f9dcc32d04aac25da589fbb76b257568dd559f65ec682f060ca537261b1"
            alt=""
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-primary">
              ❮
            </a>
            <a href="#slide2" className="btn btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=900&t=st=1667880761~exp=1667881361~hmac=efd602b9c0bbb4f52d3f2d14ac296789f2b03dcfaf588d396361cb8a0afc08fb"
            alt=""
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-primary">
              ❮
            </a>
            <a href="#slide3" className="btn btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/flat-lay-table-full-delicious-food-arrangement_23-2149141371.jpg?w=900&t=st=1667880841~exp=1667881441~hmac=518783e221287d0a0163ff7f4eaaba69f0f63e8e293746e70c56815cf30f22ec"
            alt=""
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-primary">
              ❮
            </a>
            <a href="#slide4" className="btn btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-dishes-new-year-holiday_127425-162.jpg?w=1060"
            alt=""
            className="w-full rounded-lg shadow-xl"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-primary">
              ❮
            </a>
            <a href="#slide1" className="btn btn-primary">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
