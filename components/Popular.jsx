import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Popular() {
  const content = [
    {
      img: "/hotel4.jpg",
      price: 240000,
      title: "รีสอร์ทว่างให้เช่า",
      Parking: 2,
      bedrooms: 4,
      bathrooms: 1,
    },
    {
      img: "/hotel2.jpg",
      price: 1200,
      title: "โรงเเรงว่างให้เช่า",
      Parking: 1,
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      img: "/hotel3.jpg",
      price: 100000,
      title: "คอนโดว่างให้เช่า",
      Parking: 3,
      bedrooms: 5,
      bathrooms: 6,
    },
    {
      img: "/hotel4.jpg",
      price: 990,
      title: "ว่างให้เช่า",
      Parking: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
    {
      img: "/hotel4.jpg",
      price: 990,
      title: "ว่างให้เช่า",
      Parking: 1,
      bedrooms: 1,
      bathrooms: 1,
    },
  ];

  return (
    <>
      <div className="">
        <div>
          <h1 className="  font-samibold text-3xl ">
            Popular Project
          </h1>
          <hr />
          <hr />
          <h2> โครงการยอดนิยม</h2>
        </div>
        <div>
          <ul className="flex mt-1 overflow-x-auto">
            {content.map((item, index) =>
              item.title ? (
                <li key={index} className="mx-1">
                  <Link
                    href="#"
                    className="block bg-white rounded-lg p-5 shadow-sm shadow-indigo-100 "
                  >
                    <Image
                      alt="hotel"
                      src={item.img}
                      className="w-full h-full rounded-md object-cover"
                      width={300}
                      height={100}
                    />

                    <div className="mt-2">
                      <dl>
                        <div>
                          <dt className="sr-only">Price</dt>
                          <dd className="text-sm text-gray-500">
                            $ {item.price}
                          </dd>
                        </div>

                        <div>
                          <dt className="sr-only">Address</dt>
                          <dd className="font-medium">{item.title}</dd>
                        </div>
                      </dl>

                      <div className="mt-6 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Parking</p>
                            <p className="font-medium">{item.Parking} spaces</p>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Bathroom</p>
                            <p className="font-medium">
                              {item.bathrooms} rooms
                            </p>
                          </div>
                        </div>

                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                          <svg
                            className="size-4 text-indigo-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                          </svg>

                          <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Bedroom</p>
                            <p className="font-medium">{item.bedrooms} rooms</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ) : (
                <div>loading...</div>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
