import React from "react";
import Image from "next/image";

export default function NewProject() {
  const content = [
    {
      img: "https://media.istockphoto.com/id/1025397702/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99-%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95.jpg?s=1024x1024&w=is&k=20&c=no01pItAxUz4mzss3QrHsiobzFCt70nQDrzXrVOZK8M=",
      title: "mekin HAUS Chiang Mai",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
    {
      img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
      title: "Condo Me Ban Pho",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
    {
      img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
      title: "CABANAS Hua Hin",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
    {
      img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
      title: "Whizdom Craftz Samyan",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },

  ];
  return (
    <div className="">
      <div>
        <p>New Project</p>
      </div>

      <div className="flex bg-white rounded-xl mb-2 ">
        <Image
          src={
            "https://media.istockphoto.com/id/1539961941/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%97%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%80%E0%B8%AE%E0%B8%B2%E0%B8%AA%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%A3%E0%B8%96%E0%B9%83%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%A2%E0%B9%87%E0%B8%99.jpg?s=1024x1024&w=is&k=20&c=4R_csfvmHhLR_VdQc_Cn1qPNfuoHpAA4p6XgiZ24igA="
          }
          alt=""
          width={500}
          height={100}
        />
        <div className="  w-full mx-10  flex flex-col justify-around ">
          <div className="flex">
            <p className="bg-[#FF7A00] text-white px-2  py-2  rounded-xl  text-xs ">
              New Project
            </p>
            <p className=" border border-teal-950 text-teal-950 px-2 py-2  rounded-xl  text-xs mx-2">
              Condo
            </p>
          </div>
          <div>
            <p className="text-xl ">Chewathai Hallmark Ekkamai - Raminthra</p>
            <p className="text-[#505050] text-sm">บึงกุ่ม กรุงเทพมหานคร</p>
          </div>
          <div>
            <p className=" text-sky-600 text-lg">Price: N/A</p>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="text-[#505050]">No. of units in project</p>
              <p>4113 units</p>
            </div>
            <div>
              <p className="text-[#505050]">Room size</p>
              <p>Not Available</p>
            </div>
            <div>
              <p className="text-[#505050]">Price per sq.m.</p>
              <p>Not Available</p>
            </div>
            <div>
              <p className="text-[#505050]">building</p>
              <p>8 fl.</p>
            </div>
          </div>
          <div>
            <button className=" border border-gray-300 px-3 py-2 rounded-lg">
              View project details
            </button>
          </div>
        </div>
      </div>

      <div>
        <ul className="  flex justify-between">
          {content.map((item, index) =>
            item.title ? (
              <li key={index} className="  bg-white w-1/5 rounded-xl">
                <div>

                </div>
                <div>
                  <Image src={item.img} width={400} height={100} alt="condo" />
                </div>
                <div>
                  <p className="m-3">{item.title}</p>
                  <p className="m-3 text-sky-600"> Price :{item.price}</p>
                  <div className="flex text-gray-500 text-xs m-3  ">
                    <div className=" flex">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                      <p>{item.building} fl.</p>
                    </div>
                    <div className="flex ml-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                        />
                      </svg>
                     <p> room size {item.Roomsize} </p>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <div>loading...</div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
