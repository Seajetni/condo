import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Search() {
  const [dropdownValues, setDropdownValues] = useState({
    zone: "",
    project: "",
    bts: "",
    province: "",
    school: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDropdownValues({ ...dropdownValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitted form data:", dropdownValues);
  };

  return (
    <div>
      <div className=" w-full max-w-md mx-auto   mb-4 p-4 border rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className=" mb-4">
            <div className="w-full mb-2 md:mb-0">
              <div class="relative">
                <input
                  type="text"
                  id="project"
                  name="project"
                  value={dropdownValues.project}
                  onChange={handleChange}
                  class=" w-full rounded-md border px-3 py-2 pl-10 mb-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Search Area"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full mb-2 md:mb-0">
              <select
                id="zone"
                name="zone"
                value={dropdownValues.zone}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All</option>
                <option value="sale">Sale</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
          <div className=" mb-4">
            <div className="w-full  mb-2 md:mb-0">
              <select
                id="province"
                name="province"
                value={dropdownValues.province}
                onChange={handleChange}
                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All</option>
                <option value="province1">Province 1</option>
                <option value="province2">Province 2</option>
                <option value="province3">Province 3</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full  mb-2 md:mb-0">
              <button
                type="submit"
                className="w-full rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className=" flex justify-center">
        <ul className=" flex">
          <li className="flex flex-col justify-center items-center  rounded-xl bg-white p-3 m-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>

            <Link className="flex bg-white p-3 " href={"/"}>
              House
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center  rounded-xl bg-white p-3 m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>

            <Link className="flex bg-white p-3 " href={"/"}>
              Condominium
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center  rounded-xl bg-white p-3 m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
              />
            </svg>

            <Link className="flex bg-white p-3 " href={"/"}>
              Town house
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center  rounded-xl  bg-white p-3 m-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w- h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>

            <Link className="flex bg-white p-3 " href={"/"}>
              Land
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
