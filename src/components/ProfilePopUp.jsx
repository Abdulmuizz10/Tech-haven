import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CgShoppingCart } from "react-icons/cg";
import { BiX } from "react-icons/bi";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProfilePopUp = ({ show, setShow, toggleLayout }) => {
  const { newUser, loginUser, dispatch } = useContext(AuthContext);
  return (
    <div className="absolute top-[70px] md:top-[60px] right-[0px] px-3 py-3 border border-slate-gray bg-white rounded-md shadow-lg hover:shadow-xl w-[250px] lg:w-[300px]">
      <div className="w-full flex flex-col items-start justify-center gap-2 ">
        <div className="flex items-center justify-between w-full">
          <h3 className="info-text !text-black font-bold">User profile</h3>
          <BiX
            className="text-2xl cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <RxAvatar className="text-2xl md:text-6xl" />

          <p className="info-text !text-black whitespace-nowrap overflow-hidden text-ellipsis w-36">
            {newUser?.username} {loginUser?.email.split("@")[0]}
          </p>
        </div>

        <ul className="w-full border-t border-slate-100 flex flex-col pt-2 gap-5">
          <li className="w-full" onClick={() => setShow(!show)}>
            <Link to="/profile" className="flex items-center gap-2 w-full">
              <RxAvatar className="text-3xl" />
              <p className="info-text">My Profile</p>
            </Link>
          </li>
          <li className="w-full" onClick={() => setShow(!show)}>
            <Link to="/cart" className="flex items-center gap-2 w-full">
              <CgShoppingCart className="text-3xl" />
              <p className="info-text">Shopping Cart</p>
            </Link>
          </li>

          <Link
            to="/login"
            className="cursor-pointer !text-white bg-black hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center info-text w-full"
            onClick={() => {
              dispatch({ type: "LOG_OUT_SUCCESS" });
              toggleLayout(false);
              setShow(!show);
            }}
          >
            Log out
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePopUp;
