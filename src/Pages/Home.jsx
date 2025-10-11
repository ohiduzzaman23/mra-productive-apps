import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AppCard from "../Components/AppCard";

import googlePlay from "../assets/google-play.png";
import appPlay from "../assets/app-store.png";
import heroImage from "../assets/hero.png";
import Built from "./Built";

const Home = () => {
  const products = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = products.slice(0, 12);

  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
        <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-indigo-600 font-semibold text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* 🔹 Container Section */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Hero Text */}
        <div className="flex justify-center text-center mt-10">
          <div className="w-full lg:w-4/5">
            <h1 className="text-[42px] md:text-[65px] font-bold leading-tight">
              We Build <br />
              <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-5 text-gray-500 max-w-2xl mx-auto">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div>
              <Link to="https://play.google.com/store/games?hl=en">
                <button className="btn mr-4">
                  <img src={googlePlay} alt="" className="w-[20px]" />
                  Google Play
                </button>
              </Link>
              <Link to="https://www.apple.com/app-store/">
                <button className="btn">
                  <img src={appPlay} alt="" className="w-[20px]" />
                  App Store
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img src={heroImage} alt="" className="w-[600px] mt-10" />
        </div>
      </div>

      <div className="w-full bg-gradient-to-tr from-[#6B35E5] to-[#9C5FF1] text-white py-12 text-center">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl font-bold mb-8">
            Trusted by Millions, Built for You
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-gray-300">Total Downloads</p>
              <h1 className="text-6xl font-bold my-4">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div>
              <p className="text-gray-300">Total Reviews</p>
              <h1 className="text-6xl font-bold my-4">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div>
              <p className="text-gray-300">Active Apps</p>
              <h1 className="text-6xl font-bold my-4">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Featured Apps */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {featuredProducts.map((product) => (
            <AppCard key={product.id} product={product} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center my-10">
          <Link to="/products">
            <button className="btn bg-[#6D36E5] text-white">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
