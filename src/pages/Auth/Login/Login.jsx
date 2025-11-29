import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useAuth();
  const handleLogin = (data) => {
    console.log("from data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location.state?.pathname || '/')
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mx-auto mt-10 card bg-base-100 w-full max-w-sm shadow-2xl p-6">
  <h3 className="text-center text-3xl font-semibold mb-2">Welcome Back</h3>
  <p className="text-center text-gray-500 mb-6">Please login to your account</p>

  <form onSubmit={handleSubmit(handleLogin)}>
    <div className="flex flex-col gap-4">
      {/* Email */}
      <div className="form-control">
        <label className="label text-sm font-medium">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Email"
          {...register("email", { required: true })}
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
          className="input input-bordered w-full"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 6,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="text-red-500 text-sm mt-1">Password is required</p>
        )}
        {errors.password?.type === "minLength" && (
          <p className="text-red-500 text-sm mt-1">
            Password must be 6 characters or longer.
          </p>
        )}
      </div>

      <div className="text-right">
        <a className="link link-hover text-sm">Forgot password?</a>
      </div>

      <button type="submit" className="btn btn-neutral w-full mt-2">
        Login
      </button>
    </div>
  </form>

  <SocialLogin />

  <p className="text-center text-sm mt-4">
    New to Zap Shift?{" "}
    <Link
      state={location.state}
      className="text-blue-400 underline font-medium"
      to="/register"
    >
      Register
    </Link>
  </p>
</div>

  );
};

export default Login;
