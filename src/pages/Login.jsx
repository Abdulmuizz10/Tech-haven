import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ toggleLayout }) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    toggleLayout(false);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    toggleLayout(true);
    dispatch({ type: "LOG_IN_SUCCESS", payload: user });
    setUser({
      email: "",
      password: "",
    });
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex">
      <div className="hidden lg:flex w-3/5 h-screen bg-login-bg bg-cover bg-center "></div>

      <div className="flex min-h-screen items-center justify-center w-full lg:w-1/2 ">
        <form
          className="max-w-[480px] w-full flex flex-col gap-5 px-5"
          onSubmit={handleSubmit}
        >
          <header className="mb-1">
            <h2 className="info-text !text-black !text-2xl font-bold">
              Welcome 👋
            </h2>
            <p className="info-text">Please login here</p>
          </header>
          <div className="flex flex-col gap-1.5">
            <label className="w-full max-w-[280px] font-medium info-text !text-sm">
              Email:
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
          <button className="cursor-pointer !text-white bg-black hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center info-text">
            Login
          </button>
          <div className="flex items-center justify-between">
            <Link to="/sign-up" className="info-text !text-black">
              Create an account?
            </Link>
            <Link to={"#"} className="info-text !text-black">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
