import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";

const Works = () => {
  const cards = [
    {
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10">
      <h2 className="text-secondary text-2xl font-bold">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="card card-dash bg-base-100 max-w-96 border-2 border-base-300"
            >
              <div className="card-body">
                <CiDeliveryTruck size={60} />
                <h2 className="card-title text-secondary">{card.title}</h2>
                <p className="text-base-content">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
