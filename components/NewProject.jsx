import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function NewProject() {
  const content = [
    {
      id: "1",
      img: "https://media.istockphoto.com/id/1025397702/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99-%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95.jpg?s=1024x1024&w=is&k=20&c=no01pItAxUz4mzss3QrHsiobzFCt70nQDrzXrVOZK8M=",
      title: "😍😍mekin HAUS Chiang Mai",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
    {
      id: "2",
      img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
      title: "🎉🎊Condo Me Ban Pho",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
    {
      id: "3",
      img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
      title: "CABANAS Hua Hin",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
    {
      id: "4",
      img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
      title: "🎇Whizdom Craftz Samyan",
      price: "N/A",
      building: "N/A",
      Roomsize: "N/A",
    },
  ];
  return (
    <div className="mt-10">
      <div >
        <p className=" text-3xl">ประกาศล่าสุด</p>
      </div>
      <ul className=" bg-white px-10 py-2 rounded-xl mt-2">
        {content.map((item, index) =>
          item.title ? (
            <li key={index}>
              <Link className="flex bg-white rounded-xl mb-2 " href={'/'}>
                <Image
                  src={item.img}
                  alt=""
                  priority
                  width={500}
                  height={100}
                />
                <div className="  w-full mx-10  grid grid-rows-4 ">
                  <div className="flex">
                    <p className="bg-[#FF7A00] text-white px-2  py-2  w-20 h-8 rounded-xl  text-xs ">
                      New Project
                    </p>
                    <p className=" border border-teal-950 text-teal-950  w-15 h-8 px-2 py-2  rounded-xl  text-xs mx-2">
                      Condo
                    </p>
                  </div>
                  <div>
                    <p className="text-xl ">
                      {item.title}
                    </p>
                  </div>
                  <div>
                    <p className=" text-sky-600 text-lg">Price: N/A</p>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-[#505050]">No. of units in project</p>
                      <p>{item.id} units</p>
                    </div>
                    <div>
                      <p className="text-[#505050]">Room size</p>
                      <p>{item.Roomsize}</p>
                    </div>
                    <div>
                      <p className="text-[#505050]">Price per sq.m.</p>
                      <p>{item.price}</p>
                    </div>
                    <div>
                      <p className="text-[#505050]">building</p>
                      <p>{item.building} fl.</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ) : (
            <li></li>
          )
        )}
      </ul>
    </div>
  );
}
