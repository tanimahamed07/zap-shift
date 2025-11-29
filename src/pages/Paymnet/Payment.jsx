import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: parcel, isLoading } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
  // console.log(parcel)
  const paymentInfo = {
    cost: parcel.cost,
    parcelId: parcel._id,
    senderEmail: parcel.senderEmail,
    parcelName: parcel.parcelName,
  };

  const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
  window.location.href = res.data.url;
};

  // console.log(parcel);
  if (isLoading) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Please Pay {parcel.cost}: {parcel?.parcelName}
      </h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">Pay</button>
    </div>
  );
};

export default Payment;
