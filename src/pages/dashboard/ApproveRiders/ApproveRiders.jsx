import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEye, FaUserCheck } from "react-icons/fa";
import { CgRemove } from "react-icons/cg";
import { IoPersonRemove } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("riders");
      return res.data;
    },
  });
console.log(riders)
  const updateRiderStatus = (rider, status) => {
    console.log(rider.email)
    const updateInfo = { status: status, email:rider.email };
    // console.log(updateInfo)
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      console.log(res)
      if (res.data.modifiedCount) {
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider has been ${status}!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };
  return (
    <div>
      <h2 className="text-5xl">Riders Pending Approval : {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Application Status</th>
              <th>Worker Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.riderDistrict}</td>
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-800"
                        : "text-red-500"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.workStatus}</td>

                <td>
                  <button
                    className="btn"
                  >
                    <FaEye></FaEye>
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn"
                  >
                    <FaUserCheck></FaUserCheck>
                  </button>

                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn"
                  >
                    <IoPersonRemove></IoPersonRemove>
                  </button>
                  <button className="btn">
                    <FaTrashCan></FaTrashCan>
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApproveRiders;
