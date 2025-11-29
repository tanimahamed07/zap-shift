import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    control,
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const riderRegion = useWatch({ control, name: "region" });
  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("http://localhost:3000/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you in 15 days!",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-primary">Be A Rider</h2>
      <form
        onSubmit={handleSubmit(handleRiderApplication)}
        className="mt-12 p-4 text-black"
      >
        {/* tow column  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* sender info  */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Rider Details</h4>
              <label className="label">Rider Name</label>
              <input
                type="text"
                {...register("name")}
                className="input w-full"
                placeholder="Rider Name"
              />
            </fieldset>
            {/* sender email  */}
            <fieldset className="fieldset">
              <label className="label">Rider Email</label>
              <input
                type="text"
                {...register("email")}
                className="input w-full"
                placeholder="Rider Email"
              />
            </fieldset>
            {/* {sender address}  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Rider Address</label>
              <input
                type="text"
                {...register("riderAddress")}
                className="input w-full"
                placeholder="Rider Address"
              />
            </fieldset>
            {/* sender region  */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Rider Region</legend>
              <select
                {...register("region")}
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
              <legend className="fieldset-legend">Rider Districts</legend>
              <select {...register("riderDistrict")} className="select">
                <option disabled>PICK A DISTRICT</option>
                {districtsByRegion(riderRegion).map((district, i) => (
                  <option value={district} key={i}>
                    {district}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* phone number  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Phone Number</label>
              <input
                type="number"
                {...register("phoneNumber")}
                className="input w-full"
                placeholder="Phone Number"
              />
            </fieldset>
          </div>
          {/* receiver info  */}
          <div>
            {/* receiver info  */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">More Details</h4>
              <label className="label">Driving License</label>
              <input
                type="text"
                {...register("license")}
                className="input w-full"
                placeholder="Driving License"
              />
            </fieldset>
            {/* receiver email */}
            <fieldset className="fieldset">
              <label className="label">NID</label>
              <input
                type="text"
                {...register("nid")}
                className="input w-full"
                placeholder="NID"
              />
            </fieldset>
            {/* {bike information}  */}
            <fieldset className="fieldset">
              <label className="label mt-4">Bike</label>
              <input
                type="text"
                {...register("bike")}
                className="input w-full"
                placeholder="Bike"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          value="Apply as a Rider"
          className="btn btn-primary text-black mt-8"
        />
      </form>
    </div>
  );
};

export default Rider;
