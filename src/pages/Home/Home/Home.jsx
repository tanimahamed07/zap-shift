import React from "react";
import Banner from "../Banner/Banner";
import Works from "../Works/Works";
import OurService from "../OurService/OurService";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <OurService></OurService>
      <Brands></Brands>
      <Features></Features>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
