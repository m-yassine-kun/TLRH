import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center ">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4 text-center pb-8 text-[#289672]">
          Login
        </span>
        <form className="mb-4" action="/" method="">
          <div className="mb-4 md:w-full">
            <label for="email" class="block text-xs mb-1">
              Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div class="mb-6 md:w-full">
            <label for="password" class="block text-xs mb-1">
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="bg-[#7ec0aa] hover:bg-[#289672] text-white uppercase text-sm font-semibold px-4 py-2 rounded">
            Login
          </button>
        </form>
        <Link className="text-blue-700 text-center text-sm" to="/resetPassword">
          {" "}
          Forgot password?
        </Link>
      </div>
    </div>
  );
};

export default Login;
