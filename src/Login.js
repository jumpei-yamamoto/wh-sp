import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import if you're using react-router

const Login = () => {
  const [isActive, setIsActive] = useState("login");

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="text-4xl text-white mb-8">WHSP</h1>
      <div className="flex">
        <div
          className={`transition-all duration-300 ${
            isActive === "login" ? "z-10" : "z-0"
          }`}
        >
          <button
            type="button"
            className={`relative block mx-auto uppercase font-medium text-sm transition-transform duration-300 ${
              isActive === "login"
                ? "text-white translate-x-24"
                : "text-gray-400"
            }`}
            onClick={() => setIsActive("login")}
          >
            Login
            <span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform transition-transform duration-200"
              style={{
                transform:
                  isActive === "login" ? "translateX(0)" : "translateX(101%)",
              }}
            ></span>
          </button>
          <form
            className={`overflow-hidden mt-12 p-8 bg-gradient-to-br from-blue-200 to-blue-300 rounded-md transition-transform duration-300 ${
              isActive === "login"
                ? "transform translate-x-9 -translate-y-5"
                : "transform translate-x-16 translate-y-2"
            }`}
          >
            <fieldset
              className={`transition-opacity duration-300 ${
                isActive === "login" ? "opacity-100" : "opacity-0"
              }`}
            >
              <legend className="sr-only">
                Please, enter your email and password for login.
              </legend>
              <div className="mb-5">
                <label
                  className="block text-sm text-gray-500"
                  htmlFor="login-email"
                >
                  E-mail
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-base text-gray-800 bg-blue-50 border border-blue-100 rounded-sm"
                  id="login-email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-sm text-gray-500"
                  htmlFor="login-password"
                >
                  Password
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-base text-gray-800 bg-blue-50 border border-blue-100 rounded-sm"
                  id="login-password"
                  type="password"
                  required
                />
              </div>
            </fieldset>
            {isActive === "login" && (
              <button
                type="submit"
                className="block w-full py-2 mt-4 text-lg text-white bg-green-400 rounded-full"
              >
                Login
              </button>
            )}
          </form>
        </div>
        <div
          className={`transition-all duration-300 ${
            isActive === "signup" ? "z-10" : "z-0"
          }`}
        >
          <button
            type="button"
            className={`relative block mx-auto uppercase font-medium text-sm transition-transform duration-300 ${
              isActive === "signup"
                ? "text-white -translate-x-24"
                : "text-gray-400"
            }`}
            onClick={() => setIsActive("signup")}
          >
            Sign Up
            <span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform transition-transform duration-200"
              style={{
                transform:
                  isActive === "signup" ? "translateX(0)" : "translateX(-101%)",
              }}
            ></span>
          </button>
          <form
            className={`overflow-hidden mt-12 p-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-md transition-transform duration-300 ${
              isActive === "signup"
                ? "transform -translate-x-9 -translate-y-5"
                : "transform -translate-x-16 translate-y-2"
            }`}
          >
            <fieldset
              className={`transition-opacity duration-300 ${
                isActive === "signup" ? "opacity-100" : "opacity-0"
              }`}
            >
              <legend className="sr-only">
                Please, enter your email, password and password confirmation for
                sign up.
              </legend>
              <div className="mb-5">
                <label
                  className="block text-sm text-gray-500"
                  htmlFor="signup-email"
                >
                  E-mail
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-base text-gray-800 bg-blue-50 border border-blue-100 rounded-sm"
                  id="signup-email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-sm text-gray-500"
                  htmlFor="signup-password"
                >
                  Password
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-base text-gray-800 bg-blue-50 border border-blue-100 rounded-sm"
                  id="signup-password"
                  type="password"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  className="block text-sm text-gray-500"
                  htmlFor="signup-password-confirm"
                >
                  Confirm password
                </label>
                <input
                  className="w-full mt-2 px-3 py-2 text-base text-gray-800 bg-blue-50 border border-blue-100 rounded-sm"
                  id="signup-password-confirm"
                  type="password"
                  required
                />
              </div>
            </fieldset>
            {isActive === "signup" && (
              <button
                type="submit"
                className="block w-full py-2 mt-4 text-lg text-white bg-green-400 rounded-full"
              >
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-white text-2xl mb-4">Dashboards</h2>
        <div className="flex space-x-4">
          <Link
            to="/AdminDashboard"
            className="text-lg text-blue-300 hover:underline"
          >
            Admin Dashboard
          </Link>
          <Link
            to="/CompanyDashboard"
            className="text-lg text-blue-300 hover:underline"
          >
            Company Dashboard
          </Link>
          <Link
            to="/UserDashboard"
            className="text-lg text-blue-300 hover:underline"
          >
            User Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
