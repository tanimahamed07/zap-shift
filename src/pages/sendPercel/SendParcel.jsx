import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  // explore useMemo useCallback
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  console.log(regions);

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistricts === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;

    console.log("cost", cost);
    Swal.fire({
      title: "Agree with the Cost?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm and Continue Payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel into the database
        axiosSecure.post("/parcels", data).then((res) => {
          console.log("after saving parcel", res.data);
          if (res.data.result.insertedId) {
            console.log(res.data)
            navigate('/dashboard/my-parcels')
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Parcel has created. Please Pay!",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* parcel type  */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info: name, weight  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="text"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>
        {/* tow column  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* sender info  */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Sender Details</h4>
              <label className="label">Sender Name</label>
              <input
                type="text"
                {...register("senderName")}
                className="input w-full"
                placeholder="Sender Name"
              />
            </fieldset>
            {/* sender email  */}
            <fieldset className="fieldset">
              <label className="label">Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                className="input w-full"
                placeholder="Sender Email"
              />
            </fieldset>
            {/* {sender address}  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Sender Address</label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
              />
            </fieldset>
            {/* sender region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a Region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((region, i) => (
                  <option value={region} key={i}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender districts  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Districts</legend>
              <select {...register("senderDistrict")} className="select">
                <option disabled>PICK A DISTRICT</option>
                {districtsByRegion(senderRegion).map((district, i) => (
                  <option value={district} key={i}>
                    {district}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* phone number  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Sender Phone Number</label>
              <input
                type="number"
                {...register("senderPhoneNumber")}
                className="input w-full"
                placeholder="Phone Number"
              />
            </fieldset>
          </div>
          {/* receiver info  */}
          <div>
            {/* receiver info  */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Receiver Details</h4>
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="receiver Name"
              />
            </fieldset>
            {/* receiver email */}
            <fieldset className="fieldset">
              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />
            </fieldset>
            {/* {receiver address}  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />
            </fieldset>

            {/* receiver region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a Region"
                className="select"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((region, i) => (
                  <option value={region} key={i}>
                    {region}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* receiver districts */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* phone number  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Receiver Phone Number</label>
              <input
                type="number"
                {...register("receiverPhoneNumber")}
                className="input w-full"
                placeholder="Phone Number"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="Send Parcel"
          className="btn btn-primary text-black mt-8"
        />
      </form>
    </div>
  );
};

export default SendParcel;
