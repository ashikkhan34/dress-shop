"use client";
import { signIn } from "next-auth/react";
import loginImg from "../../../asset/login.jpg";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";

const Page = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
    reset();
  };
  return (
    <div>
      <div className="relative w-full">
        <Image
          src={loginImg}
          alt="login"
          className="w-full min-h-screen flex object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <div>
            <div className="shadow-xl rounded-2xl p-8 w-full max-w-md bg-white/10 backdrop-blur-sm">
              <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-2">
                Welcome Back
              </h2>
              <p className="text-center text-gray-400 mb-6">
                Log in to access your account
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-200"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-200 mb-1">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-200"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-9 text-gray-500 hover:text-indigo-600"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password.message as string}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg hover:bg-indigo-700 transition disabled:opacity-60"
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </form>

              {/* Divider */}
              <div className="my-5 flex items-center justify-center">
                <div className="border-t border-gray-300 w-1/3"></div>
                <p className="text-gray-200 text-sm mx-2">or</p>
                <div className="border-t border-gray-300 w-1/3"></div>
              </div>

              {/* Social Logins */}
              <div className="flex flex-col md:flex-row gap-3">
                <button onClick={()=>signIn("google")} className="flex items-center px-2 text-sm justify-center gap-2 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition">
                  <FaGoogle className="text-red-500 text-lg" />
                  Continue with Google
                </button>

                <button onClick={()=>signIn('github')} className="flex px-2 text-sm  items-center justify-center gap-2 border border-gray-300 py-2.5 rounded-lg hover:bg-gray-50 transition">
                  <FaGithub className="text-gray-800 text-lg" />
                  Continue with GitHub
                </button>
              </div>

              <p className="text-center text-sm text-gray-200 mt-5">
                Don’t have an account?{" "}
                <a
                  href="/register"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
