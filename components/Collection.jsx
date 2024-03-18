import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Collection() {
  return (
    <section className=" bg-white w-full mt-4">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="  justify-between flex mb-2">
          <h2 className="text-xl  text-blue-700 sm:text-3xl">
            ประกาศคอนโดยอดนิยม
          </h2>

          <Link href={"/"} className="flex text-blue-700 ">
            <p className="  border-blue-700  border-b-2">คอนโดทั้งหมด</p>
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
          </Link>
        </header>

        <ul className="  border p-8 rounded-3xl  border-rose-400">
          <li className=" grid grid-cols-3  h-full bg-white ">
            <Link href="#" className="group relative block  m-2 ">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1084562834/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B0%E0%B9%83%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B8%B6%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%87%E0%B8%95%E0%B8%B6%E0%B8%81.jpg?s=2048x2048&w=is&k=20&c=LQzyA6RYaE3CvkPlZBFJZP6abtkOHozqcTLRrEJ_Dys="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl   p-2  font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                  คอนโดใหม่
                </h3>
              </div>
            </Link>
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/542713258/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B9%80%E0%B8%AE%E0%B9%89%E0%B8%B2%E0%B8%AA%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=S6bIk2_JZs3FUuy3dbusS4GL5DuX1ZlQb1F0wc-Z138="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl   p-2  font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                  คอนดอมือสอง
                </h3>
              </div>
            </Link>
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/471581119/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%97%E0%B8%A1%E0%B8%9B%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B9%8C-%E0%B8%99%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%B2%E0%B8%A7%E0%B8%99%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=zJNtcEUn_wjWYM6gRvs227Wu61X53H3GZ_SfAg_v7LY="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl   p-2  font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                  คอนโดโกล้
                  <br />
                  หมาวิทยาลัย
                </h3>
              </div>
            </Link>
          </li>

          <li>
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1154773904/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%9A%E0%B8%B2%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=xHPjPHdW6AOZ01tt40W2rlEOsq_DR46Y_U5PRSkspkg="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl  flex-col p-2  font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                  <p>คอนโด</p>
                  <p>ให้เช่ารายเดือน</p>
                </h3>
              </div>
            </Link>
          </li>

          <li className="grid grid-cols-2">
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1150973098/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%AF-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%B5%E0%B8%A3%E0%B8%96%E0%B9%84%E0%B8%9F%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%94%E0%B8%B4%E0%B8%99.jpg?s=612x612&w=0&k=20&c=zKISpy4SSLJS0_HfPVf9DtLVZVYQq4s9DYkUcEEQ8Wg="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl   p-2  font-medium text-white bg-black w-full h-full bg-opacity-60   flex-col justify-center items-center flex">
                  <p>คอนโด</p> <p>โควต้าต่างชาติ</p>
                </h3>
              </div>
            </Link>
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1622171356/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%82%E0%B8%99%E0%B8%B2%E0%B8%94%E0%B9%83%E0%B8%AB%E0%B8%8D%E0%B9%88.jpg?s=612x612&w=0&k=20&c=8MX3HpCxrtSS_sDfDEqdCxHOUddbnHnzClZZwzSCTFQ="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl    font-medium text-white bg-black w-full h-full bg-opacity-60  flex-col justify-center items-center     flex">
                  <p>คอนโดอนุญาต</p>
                  <p>เลี้ยงสัวต์ </p>
                </h3>
              </div>
            </Link>
          </li>

          <li className=" grid grid-cols-3">
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1495382100/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9E%E0%B8%B1%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%AB%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%AD%E0%B8%B2%E0%B8%93%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A3.jpg?s=612x612&w=0&k=20&c=_OK8cy-fGQ13dG5VK_HxyleK_xKA8pFzDLG13DQ-MCw="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl   p-2  font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                  เพนท์เฮ้า
                </h3>
              </div>
            </Link>
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1475875346/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B9%83%E0%B8%99%E0%B9%82%E0%B8%95%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B8%A2%E0%B8%A7-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99.jpg?s=612x612&w=0&k=20&c=IS9pS5w1j6wqtbpqsUng9c6-48Ujpe_J08-W2J1rrk0="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90 "
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center  ">
                <h3 className="text-xl rounded-2xl   p-2  font-medium text-white bg-black w-full h-full    bg-opacity-60  justify-center items-center flex">
                  ดูเพล็กช์
                </h3>
              </div>
            </Link>
            <Link href="#" className="group relative block  m-2">
              <Image
                width={300}
                height={10}
                src="https://media.istockphoto.com/id/1314913769/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%AD%E0%B8%B1%E0%B8%88%E0%B8%89%E0%B8%A3%E0%B8%B4%E0%B8%A2%E0%B8%B0%E0%B8%AB%E0%B8%A3%E0%B8%B9%E0%B8%AB%E0%B8%A3%E0%B8%B2%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%84%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=8SgWbrm4iEemFSmiRPN871zDx8gInnPQjlLxdPv4mnU="
                alt=""
                className=" h-[200px] rounded-2xl aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h3 className="text-xl rounded-2xl  flex-col p-2  font-medium text-white bg-black w-full h-full bg-opacity-60  justify-center items-center flex">
                  <p>คอนโดโกล้</p>
                  <p> รถไฟฟ้า</p>
                </h3>
              </div>
            </Link>
          </li>

          <li className=" flex justify-around mt-5">
            <Link
              href={"/"}
              className=" bg-sky-300 text-blue-800 py-3 px-20 rounded-3xl"
            >
              คอนโดโกล้ BTS สายหลัก
            </Link>
            <Link
              href={"/"}
              className=" bg-sky-300 text-blue-800 py-3 px-20 rounded-3xl"
            >
              คอนโดโกล้ BTS สายทอง
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
