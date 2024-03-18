import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <div className=" mt-10">
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              ประกาศคอนโดยอดนิยม
            </h2>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-4   rounded-xl lg:grid-cols-4">
            <li>
              <Link href="#" className="group relative block">
                <img
                  src="https://media.istockphoto.com/id/1154773904/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=xHPjPHdW6AOZ01tt40W2rlEOsq_DR46Y_U5PRSkspkg="
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">คอนใหม่</h3>

                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="group relative block">
                <img
                  src="https://media.istockphoto.com/id/1429095450/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%81%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%AD%E0%B8%99%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%A3%E0%B8%B9.jpg?s=1024x1024&w=is&k=20&c=A_5RfwzxPww6HT0oVh_DMRrgM0M2OdiTNKE_q3eqEEA="
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                    คอนโดมือสอง
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="group relative block">
                <img
                  src="https://media.istockphoto.com/id/1393537665/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C%E0%B9%80%E0%B8%AE%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=a8Zuo7wpjDLGMTG6XQ2h4Oe6OcXLsAHaMitTTrBYIwQ="
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                    เพนท์เฮ้าส์
                  </h3>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#" className="group relative block">
                <img
                  src="https://media.istockphoto.com/id/1047924048/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=bbIFc_K3lH_juG-1V1xpfqYlpgwF07hjSSPpbFh4yAM="
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                    ดอนโดใกล้รถไฟฟ้า
                  </h3>
                </div>
              </Link>
            </li>
            <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 flex justify-center items-center">
              <Link href="#" className="group relative block">
                <img
                  src="https://media.istockphoto.com/id/1400097058/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%AA%E0%B8%B5%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%AA%E0%B9%84%E0%B8%95%E0%B8%A5%E0%B9%8C%E0%B9%82%E0%B8%A1%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%99%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B9%87%E0%B8%99%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5.jpg?s=1024x1024&w=is&k=20&c=8HYI0beVr_VvgiMoCPcoH_rRlBaNfyQiINv7MxbNCdo="
                  alt=""
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="text-xl font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                    คอนโดใกล้มาหาวิทยาลัย
                  </h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
