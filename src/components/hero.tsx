import { ArrowDownRight } from "lucide-react"
import React from 'react'

export const MainHero = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-20">
        <div className="w-full md:w-2/5">
          <h1 className="text-5xl font-bold">
            Let’s make your best trip ever!
          </h1>
          <p className="text-gray-700 mt-4 text-normal md:text-sm">
            We always provide the best Bali travel package services for all customers at affordable prices.
          </p>
          <button className="mt-7 bg-indigo-500 px-6 py-3 rounded-xl text-white text-sm font-medium hover:bg-indigo-600">
            Explore Now
            <ArrowDownRight className="inline ml-2" size={16} />
          </button>
        </div>
        <div className="w-full md:w-2/5 mt-8 md:mt-0">
          <img
            src="/images/image-hero.webp"
            alt=""
            className="block w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 4rem" }}
          />
        </div>
      </div>
    </div>
  );
};
