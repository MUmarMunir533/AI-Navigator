import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const ForgetPassword = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
      radial-gradient(circle at bottom right, #b26efb 0%, rgba(255,255,255,0) 30%),
      radial-gradient(circle at bottom left, #656bfd 0%, rgba(255,255,255,0) 30%)
    `,
        }}
      ></div>

      <div className="relative z-10 p-8 rounded-2xl w-80 sm:w-96 max-w-sm backdrop-blur-md">

        <div className="flex items-center justify-center mb-5 space-x-2">
          <svg
            width="43"
            height="38"
            viewBox="0 0 66 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M65.1758 58.5693L49.457 57.6357L24.3145 14.0879L31.3604 0L65.1758 58.5693ZM21.9512 18.7627L43.9004 56.9834L21.9502 45.0586L0 56.9834L21.9512 18.7617V18.7627Z"
              fill="url(#paint0_linear_3915_5122)"
            />
            <path
              d="M21.4694 45.2569L0 56.7402L21.4694 19.9355V45.2569Z"
              fill="black"
              fillOpacity="0.36"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3915_5122"
                x1="19.1693"
                y1="39.0946"
                x2="30.8174"
                y2="15.238"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.134615" stopColor="#565CFF" />
                <stop offset="0.504808" stopColor="#E4E5FF" />
                <stop offset="0.913462" stopColor="#A85AFF" />
              </linearGradient>
            </defs>
          </svg>
          <h2 className="text-xs font-black tracking-tight">AI Navigate</h2>
        </div>z

        <h2 className="text-2xl font-medium mb-1">Forgot Password</h2>
        <p className="text-gray-400 text-[14px] mb-5">
          Enter your e-mail address,and we'll give you reset instruction.
        </p>

        <form>
          <div className="mb-3">
            <label className="block mb-1 font-normal text-xs" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-[13px] focus:outline-none focus:border-purple-400 placeholder:text-xs"
              placeholder="*********"
            />
          </div>

          <Link to="/newPassword">
            <button
              type="submit"
              className="w-full mt-4 text-xs font-medium bg-linear-to-l from-[#656bfd] via-[#F8F8F8] to-[#b26efb] py-3 rounded-full transition text-black duration-300 hover:scale-105 cursor-pointer"
            >
              Send New Password
            </button>
          </Link>

          <Link
            className="flex text-xs hover:underline text-blue-600 justify-center mt-4"
            to="/"
          >
            Back to Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
