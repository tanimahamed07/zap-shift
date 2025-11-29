import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegistration = async (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);
        const imageAPI_UTL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_host
        }`;
        axios.post(imageAPI_UTL, formData).then((res) => {
          const photoUrl = res.data.data.url;
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoUrl,
          };
          axiosSecure.post("users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in data base");
            }
          });

          const userProfile = {
            displayName: data.name,
            photoURL: photoUrl,
          };
          updateUserProfile(userProfile)
            .then(() => {
              navigate(location.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-4 sm:mx-auto mt-10 max-w-md p-6 sm:p-8 bg-base-100 shadow-2xl rounded-lg">
      <h3 className="text-center text-2xl sm:text-3xl font-semibold mb-2">
        Welcome to Zap Shift
      </h3>
      <p className="text-center text-gray-500 mb-6 text-sm sm:text-base">
        Please register to continue
      </p>

      <form
        onSubmit={handleSubmit(handleRegistration)}
        className="flex flex-col gap-4"
      >
        {/* Photo */}
        <div className="form-control">
          <label className="label text-sm font-medium">Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input file-input-bordered w-full"
          />
          {errors.photo?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Photo is required</p>
          )}
        </div>

        {/* Name */}
        <div className="form-control">
          <label className="label text-sm font-medium">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input input-bordered w-full"
            placeholder="Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Name is required</p>
          )}
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input input-bordered w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Email is required</p>
          )}
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^[A-Za-z]+$/i,
            })}
            className="input input-bordered w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">Password required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500 text-sm mt-1">
              Password must be 6 characters or longer.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500 text-sm mt-1">
              Only letters are allowed.
            </p>
          )}
        </div>

        <div className="text-right">
          <a className="link link-hover text-sm">Forgot password?</a>
        </div>

        <button type="submit" className="btn btn-neutral w-full mt-4">
          Register
        </button>
      </form>

      <SocialLogin />

      <p className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link
          state={location.state}
          to="/login"
          className="text-blue-400 underline font-medium"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
