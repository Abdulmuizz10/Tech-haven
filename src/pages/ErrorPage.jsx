import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center padding">
      <section className="container bg-white">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className=" info-text !text-5xl text-center ">Error 404 page</h1>
          <Link
            to="/"
            className="cursor-pointer !text-white bg-black hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center info-text w-fit"
          >
            Go back to home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
