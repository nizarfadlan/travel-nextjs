import React from 'react'
import Link from 'next/link'
import { dataTravelPackage } from "./dataTravelPackage"
import { PhoneCall } from "lucide-react"

export const TravelPackage = () => {
  return (
    <div className="w-full grid grid-cols-1 gap-7 mt-20 md:grid-cols-3 xl:grid-cols-4">
      {dataTravelPackage.map((item, key) => (
        <div className="w-full md:max-w-[320px] hover:shadow-xl transition-all duration-300 ease-out rounded-lg" key={key}>
          <Link href={`https://api.whatsapp.com/send?phone=6281354490456&text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20${item.title}`}>
            <img
              src={item.image}
              className="w-full h-[183px] md:w-[320px]  aspect-video object-cover rounded-t-lg hover:opacity-75"
              alt={item.title}
            />
            <div className="flex flex-col justify-between pb-3 px-3">
              <div>
                <div className="flex flex-col py-3">
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-red-500 fill-current"
                      >
                        <g data-name="Layer 2">
                          <g data-name="star">
                            <rect
                              width="24"
                              height="24"
                              transform="rotate(90 12 12)"
                              opacity="0"
                            />
                            <path d="M17.56 21a1 1 0 0 1-.46-.11L12 18.22l-5.1 2.67a1 1 0 0 1-1.45-1.06l1-5.63-4.12-4a1 1 0 0 1-.25-1 1 1 0 0 1 .81-.68l5.7-.83 2.51-5.13a1 1 0 0 1 1.8 0l2.54 5.12 5.7.83a1 1 0 0 1 .81.68 1 1 0 0 1-.25 1l-4.12 4 1 5.63a1 1 0 0 1-.4 1 1 1 0 0 1-.62.18z" />
                          </g>
                        </g>
                      </svg>
                      <label className="mx-2 text-sm">{item.rate}</label>
                    </div>
                    <div className="flex">
                      <h4 className="font-semibold text-indigo-500">
                        {item.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </h4>
                      <p className="text-gray-500 text-sm ml-1"> / Person</p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-1">
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-gray-700 text-sm mt-1">
                        {item.description.substring(0, 100) + "..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link href={`https://api.whatsapp.com/send?phone=6281354490456&text=Halo%20saya%20ingin%20pesan%20paket%20wisata%20${item.title}`} className="bg-indigo-500 px-6 py-3 rounded-xl text-white text-sm font-medium hover:bg-indigo-600 w-max ml-auto cursor-pointer" target="_black">
                <PhoneCall className="inline mr-2" size={16} />
                Book Now
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
