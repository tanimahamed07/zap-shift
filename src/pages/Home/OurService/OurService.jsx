import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import serviceImg from "../../../assets/service.png";
const OurService = () => {
  const cards = [
    {
      title: "Express  & Standard Delivery",
      description:
        "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      title: "Fulfillment Solution",
      description:
        "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];
  return (
    <div className="bg-secondary rounded-3xl mt-[100px]">
      <div className="text-center pt-15 pb-7">
        <h1 className="text-white text-3xl font-semibold">Our Service</h1>
        <p className="text-gray-300">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      <div>
        <div className= "max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-15">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl card card-dash bg-base-100 max-w-96 hover:bg-primary"
            >
              <div className="card-body flex flex-col items-center  text-center">
                <div className="h-[88px] w-[88px] rounded-full  bg-gradient-to-t from-[#EEEDFC]/0 to-[#EEEDFC]/100  flex items-center justify-center">
                  <img src={serviceImg} alt="Service" />
                </div>
                <h2 className="card-title text-secondary">{card.title}</h2>
                <p className="text-base-content">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
