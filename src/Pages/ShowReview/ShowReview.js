import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Reviews from "../Reviews/Reviews";
import ShowReviewRow from "./ShowReviewRow";

const ShowReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, [user?.email]);
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reviews?.map((review) => (
            <ShowReviewRow key={review._id} review={review}></ShowReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowReview;
