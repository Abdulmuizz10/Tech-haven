import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ toggleLayout }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    toggleLayout(false);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SIGN_UP_SUCCESS", payload: user });
    toggleLayout(true);
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="hidden lg:flex w-3/5 h-screen bg-sign-in-bg bg-cover bg-center "></div>

      <div className="flex min-h-screen items-center justify-center w-full lg:w-1/2 ">
        <form
          className="max-w-[480px] w-full flex flex-col gap-5 px-5"
          onSubmit={handleSubmit}
        >
          <header className="mb-1">
            <h2 className="info-text !text-black !text-2xl font-bold">
              Welcome 👋
            </h2>
            <p className="info-text">Please Sign up here</p>
          </header>
          <div className="flex flex-col gap-1.5">
            <label className="w-full max-w-[280px] font-medium info-text !text-sm">
              Full Name:
            </label>
            <input
              type="text"
              className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 p-2"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="w-full max-w-[280px] font-medium info-text !text-sm">
              Email Address:
            </label>
            <input
              type="email"
              className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 p-2"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="w-full max-w-[280px] font-medium  info-text !text-sm">
              Password:
            </label>
            <input
              type="password"
              className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 p-2"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="w-full max-w-[280px] font-medium info-text !text-sm">
              Confirm Password:
            </label>
            <input
              type="password"
              className="text-16 placeholder:text-16 rounded-lg border border-gray-300 text-gray-900 placeholder:text-gray-500 p-2"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              required
            />
          </div>
          <button className="cursor-pointer !text-white bg-black hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center info-text">
            Sign Up
          </button>

          <Link to="/login" className="info-text !text-black text-left ">
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
