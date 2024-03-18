import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Popular() {

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => Math.min(prevIndex + 1, content.length - 5));
  };


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
          <h1 className="  font-samibold text-3xl ">Popular Project</h1>
          <hr />
          <hr />
          <h2> โครงการยอดนิยม</h2>
        </div>
        <div className="">
        <ul className="flex mt-1 overflow-x-auto">
          {content.slice(startIndex, startIndex + 5).map((item, index) => (
            <li key={index} className="mx-1">
              <Link href={"/"}>
                <div className="relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={100}
                    className=""
                  />
                  <div className="absolute bottom-0 left-0 text-white p-2 flex justify-between w-full">
                    <p>{item.title}</p>
                    <Image
                      src={
                        "https://media.istockphoto.com/id/1472818295/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%88%E0%B9%8C%E0%B9%81%E0%B8%9B%E0%B8%A3%E0%B8%87%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B0%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B2%E0%B9%81%E0%B8%95%E0%B8%81%E0%B9%80%E0%B8%99%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A2%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%80%E0%B8%9A%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%97%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%94%E0%B8%B2%E0%B8%A9%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%9C%E0%B8%99%E0%B8%B1%E0%B8%87%E0%B8%8B%E0%B8%B5%E0%B9%80%E0%B8%A1%E0%B8%99.jpg?s=2048x2048&w=is&k=20&c=UA7q1HmbjfIvUydWf093rn1BGfhTCrb15lbByPWAhE4="
                      }
                      width={300}
                      height={100}
                      alt={item.title}
                      className="w-16"
                    />
                  </div>
                </div>
                <div className="bg-white text-sm flex justify-between items-center">
                  <div>
                    <p>Lorem ipsum dolor sit.</p>
                    <p className="text-[#505050]">Lorem ipsum </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="bg-white text-sm rounded-md flex justify-between items-center">
                  <div>
                    <p>Lorem ipsum dolor sit.</p>
                    <p className="text-[#505050]">Lorem ipsum </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {content.length > 5 && (
        <div className="flex justify-center mt-2 ">
          {[...Array(Math.ceil(content.length / 5)).keys()].map((num) => (
            <button
              key={num}
              onClick={() => setStartIndex(num * 5)}
              className={`mx-1 p-1 rounded-full focus:outline-none ${
                startIndex === num * 5 ? 'bg-blue-500 text-white  ' : 'bg-gray-300 '
              }`}
            >
              {''}
            </button>
          ))}
        </div>
      )}
      </div>
    </>
  );
}
