import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-sm p-6 rounded-xl shadow bg-base-100 border border-base-200">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-3xl text-primary mb-3" />

      {/* Quote Text */}
      <p className="text-base mb-4">{review.review}</p>

      <div className="divider my-2"></div>

      {/* Author Section */}
      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 rounded-full bg-primary">
          <img src={review.user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold">{review.userName}</h3>
          <p className="text-sm">{review.user_email}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
